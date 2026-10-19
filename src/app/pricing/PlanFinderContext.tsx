'use client'

import { createContext, useContext, useMemo, useState, type ReactNode } from 'react'

export type PlanName = 'starter' | 'pro' | 'agency'

type PlanFinderState = {
  workspaces: 1 | 3 | 9
  slack: 0 | 1
  plan: PlanName
  setWorkspaces: (w: 1 | 3 | 9) => void
  setSlack: (s: 0 | 1) => void
}

const PlanFinderContext = createContext<PlanFinderState | null>(null)

function computePlan(workspaces: number, slack: number): PlanName {
  if (workspaces > 3) return 'agency'
  if (workspaces > 1 || slack) return 'pro'
  return 'starter'
}

export function PlanFinderProvider({ children }: { children: ReactNode }) {
  const [workspaces, setWorkspaces] = useState<1 | 3 | 9>(1)
  const [slack, setSlack] = useState<0 | 1>(0)
  const plan = useMemo(() => computePlan(workspaces, slack), [workspaces, slack])

  return (
    <PlanFinderContext.Provider value={{ workspaces, slack, plan, setWorkspaces, setSlack }}>
      {children}
    </PlanFinderContext.Provider>
  )
}

export function usePlanFinder() {
  const ctx = useContext(PlanFinderContext)
  if (!ctx) throw new Error('usePlanFinder must be used within PlanFinderProvider')
  return ctx
}
