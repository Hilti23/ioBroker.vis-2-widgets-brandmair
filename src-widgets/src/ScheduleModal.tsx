import React, { useState, useCallback } from 'react';
import { Button, IconButton, Select, MenuItem, type SelectChangeEvent } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import CloseIcon from '@mui/icons-material/Close';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------
interface Slot { time: string; temp: number; }
type Schedule = Record<string, Slot[]>;

interface ScheduleModalProps {
    title: string;
    scheduleRaw: any;
    onSave: (json: string) => void;
    onClose: () => void;
}

const DAYS = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'] as const;
const DAY_LABELS: Record<string, string> = {
    monday: 'Mo', tuesday: 'Di', wednesday: 'Mi', thursday: 'Do',
    friday: 'Fr', saturday: 'Sa', sunday: 'So',
};

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------
function parseSchedule(raw: any): Schedule {
    const r: Schedule = {};
    DAYS.forEach(d => { r[d] = []; });
    if (!raw) return r;
    try {
        const o = typeof raw === 'string' ? JSON.parse(raw) : raw;
        DAYS.forEach(d => {
            if (o[d]) {
                r[d] = o[d].trim().split(/\s+/).filter(Boolean).map((s: string) => {
                    const p = s.split('/');
                    return { time: p[0].trim(), temp: parseFloat(p[1]) };
                });
            }
        });
    } catch { /* ignore */ }
    return r;
}

function buildScheduleStr(sched: Schedule): string {
    const o: Record<string, string> = {};
    DAYS.forEach(d => {
        const sl = (sched[d] || []).filter(s => s.time && !isNaN(s.temp));
        if (sl.length) o[d] = sl.map(s => `${s.time}/${s.temp}`).join(' ');
    });
    return JSON.stringify(o);
}

function timeToMin(s: string): number {
    const p = s.split(':');
    return (parseInt(p[0]) || 0) * 60 + (parseInt(p[1]) || 0);
}

function minToTime(m: number): string {
    const h = Math.floor(m / 60) % 24;
    const mm = m % 60;
    return `${h < 10 ? '0' : ''}${h}:${mm < 10 ? '0' : ''}${mm}`;
}

function clamp(v: number, min: number, max: number): number {
    return Math.max(min, Math.min(max, v));
}

function blockColor(t: number): string {
    if (t <= 16) return '#5DCAA5';
    if (t <= 19) return '#2ec27e';
    if (t <= 22) return '#EF9F27';
    return '#D85A30';
}

// ---------------------------------------------------------------------------
// Viz bar
// ---------------------------------------------------------------------------
function VizBar({ slots }: { slots: Slot[] }) {
    const sorted = [...slots].sort((a, b) => a.time.localeCompare(b.time));
    if (!sorted.length) {
        return (
            <div style={{ position: 'relative', height: 14, background: 'rgba(255,255,255,0.05)', borderRadius: 4, overflow: 'hidden' }}>
                <span style={{ position: 'absolute', left: 6, top: 1, fontSize: 9, color: 'rgba(255,255,255,0.25)' }}>–</span>
            </div>
        );
    }
    const timeToP = (s: string) => {
        const p = s.split(':');
        return ((parseInt(p[0]) || 0) * 60 + (parseInt(p[1]) || 0)) / 1440 * 100;
    };
    return (
        <div style={{ position: 'relative', height: 14, background: 'rgba(255,255,255,0.05)', borderRadius: 4, overflow: 'hidden' }}>
            {sorted.map((slot, i) => {
                const start = timeToP(slot.time);
                const end = i + 1 < sorted.length ? timeToP(sorted[i + 1].time) : 100;
                const w = end - start;
                return (
                    <div key={i} style={{
                        position: 'absolute', top: 2, bottom: 2, borderRadius: 3,
                        left: `${start.toFixed(1)}%`, width: `${w.toFixed(1)}%`,
                        background: blockColor(slot.temp),
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        overflow: 'hidden',
                    }} title={`${slot.time} – ${slot.temp}°C`}>
                        {w > 10 && <span style={{ fontSize: 8, fontWeight: 700, color: '#fff' }}>{slot.temp}°</span>}
                    </div>
                );
            })}
        </div>
    );
}

// ---------------------------------------------------------------------------
// Adj button (small up/down)
// ---------------------------------------------------------------------------
function AdjBtn({ icon, onClick }: { icon: 'up' | 'down'; onClick: () => void }) {
    return (
        <IconButton size="small" onClick={onClick} sx={{ padding: '2px', color: 'rgba(255,255,255,0.5)' }}>
            {icon === 'up' ? <ArrowDropUpIcon fontSize="small" /> : <ArrowDropDownIcon fontSize="small" />}
        </IconButton>
    );
}

// ---------------------------------------------------------------------------
// ScheduleModal
// ---------------------------------------------------------------------------
export default function ScheduleModal({ title, scheduleRaw, onSave, onClose }: ScheduleModalProps) {
    const [sched, setSched] = useState<Schedule>(() => parseSchedule(scheduleRaw));
    const [day, setDay] = useState<string>('monday');

    const slots = sched[day] || [];

    const update = useCallback((fn: (s: Schedule) => void) => {
        setSched(prev => {
            const next = JSON.parse(JSON.stringify(prev));
            fn(next);
            return next;
        });
    }, []);

    const adjSlot = (idx: number, field: 'h' | 'm' | 't', delta: number) => {
        update(s => {
            const sl = s[day];
            if (!sl[idx]) return;
            if (field === 't') {
                sl[idx].temp = clamp(Math.round((sl[idx].temp + delta) * 2) / 2, 4, 35);
            } else {
                const cur = timeToMin(sl[idx].time);
                const nv = cur + (field === 'h' ? delta * 60 : delta);
                const minT = idx > 0 ? timeToMin(sl[idx - 1].time) + 5 : 0;
                const maxT = idx + 1 < sl.length ? timeToMin(sl[idx + 1].time) - 5 : 1435;
                sl[idx].time = minToTime(clamp(nv, minT, maxT));
            }
        });
    };

    const addSlot = () => {
        update(s => {
            if (!s[day]) s[day] = [];
            if (s[day].length >= 6) return;
            if (s[day].length === 0) s[day].push({ time: '00:00', temp: 20 });
            const last = timeToMin(s[day][s[day].length - 1].time);
            s[day].push({ time: minToTime(Math.min(last + 60, 1435)), temp: 20 });
        });
    };

    const delSlot = (idx: number) => {
        update(s => {
            s[day].splice(idx, 1);
            if (s[day].length === 1) s[day].length = 0;
        });
    };

    const copyDay = (from: string) => {
        if (!from || from === day) return;
        update(s => {
            s[day] = (s[from] || []).map(sl => ({ ...sl }));
        });
    };

    // Styles
    const overlay: React.CSSProperties = {
        position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.7)',
        display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 9999,
    };
    const modal: React.CSSProperties = {
        background: '#1e1e1e', borderRadius: 16, width: 820, maxWidth: '95vw',
        maxHeight: '90vh', overflow: 'auto', padding: 20,
        border: '1px solid rgba(255,255,255,0.15)',
    };

    return (
        <div style={overlay} onClick={onClose}>
            <div style={modal} onClick={e => e.stopPropagation()}>
                {/* Header */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
                    <div>
                        <div style={{ fontSize: 18, fontWeight: 700, color: '#fff' }}>Wochenplan</div>
                        <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)' }}>{title}</div>
                    </div>
                    <IconButton onClick={onClose} sx={{ color: 'rgba(255,255,255,0.5)' }}>
                        <CloseIcon />
                    </IconButton>
                </div>

                {/* Viz bars */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 4, marginBottom: 16 }}>
                    {DAYS.map(d => (
                        <div key={d} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                            <span style={{ width: 24, fontSize: 10, color: 'rgba(255,255,255,0.4)', textAlign: 'right' }}>
                                {DAY_LABELS[d]}
                            </span>
                            <div style={{ flex: 1 }}>
                                <VizBar slots={sched[d] || []} />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Day tabs + copy */}
                <div style={{ display: 'flex', gap: 4, marginBottom: 16, alignItems: 'center', flexWrap: 'wrap' }}>
                    {DAYS.map(d => (
                        <button
                            key={d}
                            onClick={() => setDay(d)}
                            style={{
                                padding: '4px 10px', borderRadius: 6, fontSize: 12, cursor: 'pointer',
                                border: d === day ? '1px solid #e8622a' : '1px solid rgba(255,255,255,0.15)',
                                background: d === day ? '#e8622a' : 'rgba(0,0,0,0.25)',
                                color: d === day ? '#fff' : 'rgba(255,255,255,0.5)',
                            }}
                        >
                            {DAY_LABELS[d]}
                        </button>
                    ))}
                    <Select
                        size="small"
                        value=""
                        displayEmpty
                        onChange={(e: SelectChangeEvent) => copyDay(e.target.value)}
                        sx={{
                            fontSize: 11, height: 28, marginLeft: 'auto',
                            color: 'rgba(255,255,255,0.4)',
                            '.MuiOutlinedInput-notchedOutline': { borderColor: 'rgba(255,255,255,0.1)' },
                            '.MuiSvgIcon-root': { color: 'rgba(255,255,255,0.3)' },
                        }}
                        MenuProps={{ sx: { zIndex: 10001 } }}
                        renderValue={(v) => v ? DAY_LABELS[v] : 'Kopieren von...'}
                    >
                        {DAYS.filter(d => d !== day).map(d => (
                            <MenuItem key={d} value={d}>{DAY_LABELS[d]}</MenuItem>
                        ))}
                    </Select>
                </div>

                {/* Slots */}
                {slots.length === 0 && (
                    <div style={{ textAlign: 'center', padding: 20, color: 'rgba(255,255,255,0.3)', fontSize: 13 }}>
                        Keine Zeitslots – drücke +
                    </div>
                )}

                {slots.length > 0 && (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                        {/* Base temp (first slot) */}
                        <div style={{
                            display: 'flex', alignItems: 'center', gap: 8, padding: '6px 12px',
                            background: 'rgba(255,255,255,0.05)', borderRadius: 8,
                        }}>
                            <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)', width: 40 }}>Basis</span>
                            <span style={{ fontSize: 14, fontWeight: 700, color: '#fff', width: 50, textAlign: 'center' }}>
                                {slots[0].temp.toFixed(1)}°
                            </span>
                            <AdjBtn icon="up" onClick={() => adjSlot(0, 't', 0.5)} />
                            <AdjBtn icon="down" onClick={() => adjSlot(0, 't', -0.5)} />
                        </div>

                        {/* Additional slots */}
                        {slots.slice(1).map((slot, i) => {
                            const idx = i + 1;
                            const p = slot.time.split(':');
                            return (
                                <div key={idx} style={{
                                    display: 'flex', alignItems: 'center', gap: 4, padding: '4px 12px',
                                    background: 'rgba(255,255,255,0.03)', borderRadius: 8,
                                }}>
                                    {/* Hours */}
                                    <AdjBtn icon="up" onClick={() => adjSlot(idx, 'h', 1)} />
                                    <span style={{ fontSize: 14, fontWeight: 600, color: '#fff', width: 22, textAlign: 'center' }}>
                                        {p[0]}
                                    </span>
                                    <AdjBtn icon="down" onClick={() => adjSlot(idx, 'h', -1)} />

                                    <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: 14 }}>:</span>

                                    {/* Minutes */}
                                    <AdjBtn icon="up" onClick={() => adjSlot(idx, 'm', 5)} />
                                    <span style={{ fontSize: 14, fontWeight: 600, color: '#fff', width: 22, textAlign: 'center' }}>
                                        {p[1]}
                                    </span>
                                    <AdjBtn icon="down" onClick={() => adjSlot(idx, 'm', -5)} />

                                    <span style={{ margin: '0 8px', color: 'rgba(255,255,255,0.2)' }}>|</span>

                                    {/* Temp */}
                                    <AdjBtn icon="up" onClick={() => adjSlot(idx, 't', 0.5)} />
                                    <span style={{ fontSize: 14, fontWeight: 700, color: '#fff', width: 50, textAlign: 'center' }}>
                                        {slot.temp.toFixed(1)}°
                                    </span>
                                    <AdjBtn icon="down" onClick={() => adjSlot(idx, 't', -0.5)} />

                                    {/* Delete */}
                                    <IconButton size="small" onClick={() => delSlot(idx)} sx={{ marginLeft: 'auto', color: 'rgba(255,100,100,0.5)' }}>
                                        <DeleteIcon fontSize="small" />
                                    </IconButton>
                                </div>
                            );
                        })}
                    </div>
                )}

                {/* Footer */}
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 16 }}>
                    <Button
                        size="small"
                        startIcon={<AddIcon />}
                        onClick={addSlot}
                        disabled={slots.length >= 6}
                        sx={{ color: 'rgba(255,255,255,0.5)', textTransform: 'none' }}
                    >
                        Hinzufügen
                    </Button>
                    <div style={{ display: 'flex', gap: 8 }}>
                        <Button
                            size="small"
                            onClick={onClose}
                            sx={{ color: 'rgba(255,255,255,0.4)', textTransform: 'none' }}
                        >
                            Abbrechen
                        </Button>
                        <Button
                            size="small"
                            variant="contained"
                            onClick={() => onSave(buildScheduleStr(sched))}
                            sx={{ background: '#e8622a', textTransform: 'none', '&:hover': { background: '#d4571f' } }}
                        >
                            Speichern
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
