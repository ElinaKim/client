import { Hero } from '../components/Hero'
import { Experience } from '../components/Experience'
import { Pricing } from '../components/Pricing'
import { useRef } from 'react'

export const Home = () => {
    const priceRef = useRef<HTMLDivElement | null>(null)

    return (
        <>
            <Hero priceRef={priceRef} />
            <Experience />
            <Pricing priceRef={priceRef} />
        </>
    )
}
