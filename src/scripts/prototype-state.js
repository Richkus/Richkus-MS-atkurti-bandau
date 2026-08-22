/*
  Globali AppShell būsena: Low Fidelity Mode ir Sidebar collapse (paruošta
  architektūra ateičiai, UI valdiklis kol kas neįgyvendintas).

  Būsena laikoma html elemento data-* atributuose (CSS gali reaguoti tiesiogiai)
  ir dubliuojama į localStorage, kad išgyventų puslapio perkrovimą.
*/

const FIDELITY_KEY = 'ms-prototype:fidelity'
const SIDEBAR_KEY = 'ms-prototype:sidebar'

export function getFidelity() {
  try {
    return localStorage.getItem(FIDELITY_KEY) === 'low' ? 'low' : 'normal'
  } catch {
    return 'normal'
  }
}

export function setFidelity(mode) {
  document.documentElement.setAttribute('data-fidelity', mode)
  try {
    localStorage.setItem(FIDELITY_KEY, mode)
  } catch {
    /* localStorage nepasiekiamas (privatus režimas ir pan.) — tyliai ignoruojame */
  }
}

export function toggleFidelity() {
  const next = getFidelity() === 'low' ? 'normal' : 'low'
  setFidelity(next)
  return next
}

export function getSidebarState() {
  try {
    return localStorage.getItem(SIDEBAR_KEY) === 'collapsed' ? 'collapsed' : 'expanded'
  } catch {
    return 'expanded'
  }
}

export function setSidebarState(state) {
  document.documentElement.setAttribute('data-sidebar', state)
  try {
    localStorage.setItem(SIDEBAR_KEY, state)
  } catch {
    /* localStorage nepasiekiamas — tyliai ignoruojame */
  }
}
