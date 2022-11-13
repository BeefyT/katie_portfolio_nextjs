import { RefObject, useEffect } from "react"

type AnyEvent = MouseEvent | TouchEvent

function useOutsideClick<T extends HTMLElement = HTMLElement>(
  ref: RefObject<T>,
  callback?: () => void
): void {
  useEffect(() => {
    const listener = (event: AnyEvent) => {
      const el = ref?.current

      // Do nothing if clicking ref's element or descendent elements
      if (!el || el.contains(event.target as Node)) {
        return
      }

      callback && callback()
    }

    document.addEventListener(`mousedown`, listener)
    document.addEventListener(`touchstart`, listener)

    return () => {
      document.removeEventListener(`mousedown`, listener)
      document.removeEventListener(`touchstart`, listener)
    }

    // Reload only if ref or handler changes
  }, [ref])
}

export default useOutsideClick
