import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const followerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return
    const dot = dotRef.current!
    const follower = followerRef.current!
    let mx = 0, my = 0, dx = 0, dy = 0, fx = 0, fy = 0
    let raf: number

    const onMove = (e: MouseEvent) => { mx = e.clientX; my = e.clientY }
    const loop = () => {
      dx += (mx - dx) * 0.2
      dy += (my - dy) * 0.2
      fx += (mx - fx) * 0.1
      fy += (my - fy) * 0.1
      dot.style.transform = `translate(${dx}px,${dy}px) translate(-50%,-50%)`
      follower.style.transform = `translate(${fx}px,${fy}px) translate(-50%,-50%)`
      raf = requestAnimationFrame(loop)
    }
    window.addEventListener('mousemove', onMove)
    raf = requestAnimationFrame(loop)

    const onEnter = () => { dot.classList.add('hover'); follower.classList.add('hover') }
    const onLeave = () => { dot.classList.remove('hover'); follower.classList.remove('hover') }
    document.querySelectorAll('a,button,.glass-card').forEach(el => {
      el.addEventListener('mouseenter', onEnter)
      el.addEventListener('mouseleave', onLeave)
    })

    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <>
      <div ref={dotRef} className="fixed top-0 left-0 w-2 h-2 rounded-full bg-white pointer-events-none z-[9999] mix-blend-difference hidden md:block" />
      <div ref={followerRef} className="fixed top-0 left-0 w-10 h-10 rounded-full border border-white/30 pointer-events-none z-[9999] mix-blend-difference hidden md:block transition-all duration-300" />
    </>
  )
}
