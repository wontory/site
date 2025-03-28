import { useEffect, useState } from 'react'

const useActiveItem = (itemIds: (string | undefined)[]) => {
  const [activeId, setActiveId] = useState<string>('')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries)
          if (entry.isIntersecting) setActiveId(entry.target.id)
      },
      { rootMargin: '0% 0% -80% 0%' },
    )

    for (const id of itemIds ?? []) {
      if (!id) continue

      const element = document.getElementById(id)
      if (element) observer.observe(element)
    }

    return () => {
      for (const id of itemIds ?? []) {
        if (!id) continue

        const element = document.getElementById(id)
        if (element) observer.unobserve(element)
      }
    }
  }, [itemIds])

  return activeId
}

export { useActiveItem }
