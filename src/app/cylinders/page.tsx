import CylinderCarousel from '@/components/cylindercarousel/CylinderCarousel'
import { FC } from 'react'

const Cylinders: FC = () => {
  return (
    <main className="max-w-5xl mx-auto px-4 py-8">
      <section className="bg-white py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-6">
          Industries We Serve
        </h2>
        <p className="text-lg text-center mb-8">
          At Hoist Hydraulics, we proudly design and manufacture top-quality cylinders for a diverse range of applications.
          Our expertise and commitment to reliable service have made us a global leader in hydraulic solutions.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Earth Moving</h3>
            <ul className="list-disc list-inside">
              <li>Tippers</li>
              <li>Excavators</li>
              <li>Dozers</li>
              <li>Dumpers</li>
              <li>And more...</li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">Waste Management</h3>
            <ul className="list-disc list-inside">
              <li>Transfer Stations</li>
              <li>Garbage Compactors</li>
              <li>Stationary Compactors</li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">Sugar Industry</h3>
            <ul className="list-disc list-inside">
              <li>Bin Cylinders</li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">Mining</h3>
            <ul className="list-disc list-inside">
              <li>Side Tippers</li>
              <li>Dumpers</li>
              <li>Loaders</li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">Car Transportation</h3>
            <ul className="list-disc list-inside">
              <li>Multi-Stage &amp; Single-Stage Cylinders</li>
            </ul>
          </div>
        </div>
        <p className="mt-8 text-center text-xl">
          Our commitment to quality and unparalleled support has established us as a global leader in hydraulic cylinder solutions.
          If you require a custom cylinder that isn't listed here, it only means we haven't been asked to build it yet—and we're ready to rise to the challenge.
        </p>
      </div>
    </section>

    <section>
        <CylinderCarousel/>
    </section>
    </main>
  )
}

export default Cylinders
