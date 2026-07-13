'use client'

import { useState, useMemo } from 'react'
import { PageBanner } from '@/components/page-banner'
import { scheduleData } from '@/lib/schedule-data'
import { ChevronLeft, ChevronRight, MapPin, Clock } from 'lucide-react'

const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

function getWeekStart(date: Date) {
  const d = new Date(date)
  const day = d.getDay()
  d.setDate(d.getDate() - day)
  d.setHours(0, 0, 0, 0)
  return d
}

function formatDate(d: Date) {
  return d.toLocaleDateString('en-CA') // YYYY-MM-DD
}

function formatDisplay(d: Date) {
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
}

function getTypeColor(type: string) {
  const t = type.trim().toLowerCase()
  if (t === 'game') return 'bg-red-100 border-red-300 text-red-900'
  if (t === 'practice') return 'bg-blue-100 border-blue-300 text-blue-900'
  if (t === 'development') return 'bg-purple-100 border-purple-300 text-purple-900'
  return 'bg-gray-100 border-gray-300 text-gray-900'
}

export default function SchedulePage() {
  const [weekOffset, setWeekOffset] = useState(0)
  const [teamFilter, setTeamFilter] = useState('All')

  // Get all unique teams
  const teams = useMemo(() => {
    const s = new Set<string>()
    scheduleData.forEach((e) => {
      if (e.team1) s.add(e.team1)
      if (e.team2) s.add(e.team2)
    })
    return ['All', ...Array.from(s).sort()]
  }, [])

  // Start from Jan 12, 2026 (first week in data)
  const baseDate = new Date(2026, 0, 12)
  const currentWeekStart = useMemo(() => {
    const d = getWeekStart(baseDate)
    d.setDate(d.getDate() + weekOffset * 7)
    return d
  }, [weekOffset])

  const weekDates = useMemo(() => {
    return Array.from({ length: 7 }, (_, i) => {
      const d = new Date(currentWeekStart)
      d.setDate(d.getDate() + i)
      return d
    })
  }, [currentWeekStart])

  const weekLabel = `${formatDisplay(weekDates[0])} - ${formatDisplay(weekDates[6])}, ${weekDates[0].getFullYear()}`

  const filteredEvents = useMemo(() => {
    return scheduleData.filter((e) => {
      if (teamFilter !== 'All') {
        const matchesTeam =
          e.team1.toLowerCase().includes(teamFilter.toLowerCase()) ||
          e.team2.toLowerCase().includes(teamFilter.toLowerCase())
        if (!matchesTeam) return false
      }
      const dateStrs = weekDates.map(formatDate)
      return dateStrs.includes(e.date)
    })
  }, [weekDates, teamFilter])

  const eventsByDate = useMemo(() => {
    const map: Record<string, typeof scheduleData> = {}
    filteredEvents.forEach((e) => {
      if (!map[e.date]) map[e.date] = []
      map[e.date].push(e)
    })
    return map
  }, [filteredEvents])

  return (
    <>
      <PageBanner title="Schedule" subtitle="2025-2026 season ice schedule." />

      <section className="mx-auto max-w-6xl px-4 py-10">
        {/* Controls */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setWeekOffset((w) => w - 1)}
              className="rounded-md border border-border p-2 hover:bg-muted"
              aria-label="Previous week"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <h2 className="min-w-[200px] text-center font-heading text-lg font-bold uppercase tracking-wide text-navy">
              {weekLabel}
            </h2>
            <button
              onClick={() => setWeekOffset((w) => w + 1)}
              className="rounded-md border border-border p-2 hover:bg-muted"
              aria-label="Next week"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
          <div>
            <select
              value={teamFilter}
              onChange={(e) => setTeamFilter(e.target.value)}
              className="rounded-md border border-border bg-card px-4 py-2 text-sm font-medium text-foreground"
              aria-label="Filter by team"
            >
              {teams.map((t) => (
                <option key={t} value={t}>
                  {t === 'All' ? 'All Teams' : t}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Calendar grid */}
        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-7">
          {weekDates.map((date, i) => {
            const dateStr = formatDate(date)
            const dayEvents = eventsByDate[dateStr] || []
            const isToday = formatDate(new Date()) === dateStr

            return (
              <div
                key={dateStr}
                className={`min-h-[120px] rounded-xl border p-3 ${
                  isToday ? 'border-sky bg-sky/5' : 'border-border bg-card'
                }`}
              >
                <div className="mb-2 text-center">
                  <div className="text-xs font-semibold uppercase text-muted-foreground">
                    {DAYS[i]}
                  </div>
                  <div
                    className={`text-lg font-bold ${
                      isToday ? 'text-sky' : 'text-navy'
                    }`}
                  >
                    {date.getDate()}
                  </div>
                </div>
                <div className="space-y-2">
                  {dayEvents.map((event, j) => (
                    <div
                      key={j}
                      className={`rounded-lg border p-2 text-xs ${getTypeColor(event.type)}`}
                    >
                      <div className="font-bold">
                        {event.team1}
                        {event.team2 ? ` vs ${event.team2}` : ''}
                      </div>
                      <div className="mt-0.5 flex items-center gap-1 opacity-80">
                        <Clock className="h-3 w-3" />
                        {event.time}
                      </div>
                      <div className="flex items-center gap-1 opacity-80">
                        <MapPin className="h-3 w-3" />
                        {event.arena}
                      </div>
                      <div className="mt-0.5 font-semibold uppercase">
                        {event.type}
                      </div>
                    </div>
                  ))}
                  {dayEvents.length === 0 && (
                    <p className="text-center text-xs text-muted-foreground">
                      No events
                    </p>
                  )}
                </div>
              </div>
            )
          })}
        </div>

        {/* List view for mobile */}
        <div className="mt-8 md:hidden">
          <h3 className="font-heading text-lg font-bold uppercase tracking-wide text-navy">
            This Week
          </h3>
          {filteredEvents.length === 0 && (
            <p className="mt-4 text-muted-foreground">No events this week.</p>
          )}
          <div className="mt-4 space-y-3">
            {filteredEvents.map((event, i) => (
              <div
                key={i}
                className={`rounded-xl border p-4 ${getTypeColor(event.type)}`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-bold">
                    {event.team1}
                    {event.team2 ? ` vs ${event.team2}` : ''}
                  </span>
                  <span className="rounded-full bg-white/60 px-2 py-0.5 text-xs font-bold uppercase">
                    {event.type}
                  </span>
                </div>
                <div className="mt-2 flex flex-wrap gap-3 text-sm opacity-80">
                  <span className="flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" />
                    {event.day}, {event.date} &middot; {event.time}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="h-3.5 w-3.5" />
                    {event.arena}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
