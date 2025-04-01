import { FC } from 'react'
import Image from 'next/image'

const Sales: FC = () => {
  return (
    <main className="max-w-5xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">You just can’t beat Hoist Hydraulics!</h1>

      <div className="mb-8">
        <Image
          src="/images/hoist-hydraulics-repair.jpg"
          alt="Hoist Hydraulics Repair"
          width={800}
          height={400}
          className="rounded-lg shadow-md"
        />
      </div>

      <div className="space-y-4 leading-relaxed">
        <p>
          For 40 years Hoist Hydraulics has been in the marketplace repairing all brands
          and all types of Hydraulic Cylinders.
        </p>
        <p>
          Over the time we have built a reputation that is the envy of our competitors
          because if it’s too hard or can’t be done, it ends up at Hoist Hydraulics.
        </p>
        <p>
          We understand the need for fast and efficient service as your livelihood is in our
          hands. To this end, we advise our clients that if the unit arrives on time, it will
          be out on time (usually same-day service), and our success rate of 99% speaks for itself.
        </p>
        <p>
          So if you’re after quality, cost-effective, prompt service—you’ve found the right place.
        </p>
      </div>
    </main>
  )
}

export default Sales
