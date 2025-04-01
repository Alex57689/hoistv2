import { FC } from 'react'
import Image from 'next/image'

const Company: FC = () => {
  return (
    <main className="max-w-5xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Commitment to the Industry</h1>

      <div className="mb-8">
        <Image
          src="/images/mining-truck.jpg" 
          alt="Hoist Hydraulics Building"
          width={800}
          height={400}
          className="rounded-lg shadow-md"
        />
      </div>

      <div className="space-y-4 leading-relaxed">
        <p>
          <strong>Hoist Hydraulics</strong> was established in 1970 and is one of the largest 
          suppliers of telescopic cylinders in Australia. Our continual goal is to achieve 
          the very best for our customers by providing high quality products along with 
          prompt reliable service.
        </p>
        <p>
          With over 40 years experience of supplying hydraulic cylinders, we are now a leader 
          in the tipper hoist industry. Our customers’ needs and suggestions are taken into 
          account at all times, enabling us to offer high quality products to cater for 
          real necessities and not just recommendations.
        </p>
        <p>
          With exports growing, international clients have come to respect the quality of 
          Hoist Hydraulics cylinders.
        </p>
      </div>
    </main>
  )
}

export default Company
