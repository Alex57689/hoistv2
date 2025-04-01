import Head from 'next/head'
import Link from 'next/link'
import { FC } from 'react'

const Warranty: FC = () => {
  return (
    <>
      <Head>
        <title>Warranty & Disclaimer | Hoist Hydraulics</title>
        <meta name="description" content="Warranty and disclaimer page for Hoist Hydraulics Pty Ltd" />
      </Head>
      <div className="min-h-screen bg-gray-50 py-10">
        <div className="container mx-auto px-4">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h1 className="text-3xl font-bold text-center mb-6">
              HOIST HYDRAULICS PTY LTD – WARRANTY & DISCLAIMER
            </h1>
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Warranty Statement</h2>
              <div className="space-y-4">
                <p>
                  <strong>Coverage:</strong> Hydraulic transport equipment manufactured by Hoist Hydraulics Pty Ltd (“the Company”) is warranted against defects in materials and workmanship under normal use for a period of twelve (12) months from the date of purchase.
                </p>
                <p>
                  <strong>Limitations & Voided Warranty:</strong> All warranties will be void if the unit or any part thereof is tampered with or if any unauthorized repairs are carried out. This warranty is valid only to the original owner and only if the equipment has been properly maintained.
                </p>
                <p>
                  <strong>Claims & Notification:</strong> Any claims under this warranty should be notified to the Company immediately. Instructions must be sought from the Company prior to any rectification being carried out. The Company, in its sole discretion, will determine whether the defect or damage is covered under warranty. Should the Company determine that the defect or damage is not covered, the Company reserves the right to charge for all rectification work performed.
                </p>
                <div>
                  <strong>Business Addresses:</strong>
                  <ul className="list-disc list-inside ml-4 mt-2">
                    <li>
                      <Link href='/sales-service'><strong>Hoist Hydraulics (VIC) Pty Ltd:</strong> 874 Mountain Highway, Bayswater, Victoria 3153</Link>
                    </li>
                    <li>
                    <Link href='/sales-service'><strong>Hoist Hydraulics (QLD) Pty Ltd:</strong> 12 Blivest Street, Oxley, Queensland, 4075</Link>
                    </li>
                    <li>
                    <Link href='/sales-service'><strong>Hoist Hydraulics (SA) Pty Ltd:</strong> Corner Cross Keys Road & CB Fisher Drive, Cavan, SA, 5094</Link>
                    </li>
                  </ul>
                </div>
                <p>
                  <strong>Important:</strong> Failure to return the warranty card within fourteen (14) days of purchase will render the warranty card invalid.
                </p>
              </div>
            </section>
            <section>
              <h2 className="text-2xl font-semibold mb-4">Disclaimer</h2>
              <p className="mb-4">
                Please read the following terms and conditions carefully before using the Hoist Hydraulics website. By accessing the website, you agree to the terms outlined below.
              </p>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">1. Usage of Contents</h3>
                  <p>
                    Reproduction, transfer, distribution, or storage of part or all of the contents of the site is prohibited without the written approval of Hoist Hydraulics. Modification of the contents is also prohibited. You may, however, store or print copies of extracts from the site for your personal use only.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">2. No Warranties</h3>
                  <p>
                    The contents of the site are provided “as is” and “as available.” No warranty of any kind, either express or implied, is made in relation to the accuracy, reliability, or contents of the site. Hoist Hydraulics does not warrant that the site or the servers providing it are free of errors, viruses, or other harmful components. Hoist Hydraulics reserves the right to revise the site or withdraw access to it at any time without prior notice.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">3. Submissions</h3>
                  <p>
                    Confidentiality of information transmitted via the site or by email is at your own risk. Any materials or information sent through or in connection with this website will be treated as non-confidential and non-proprietary and may be used for any purpose, including (but not limited to) reproduction, transmission, publication, broadcast, and posting. Hoist Hydraulics shall have no obligation of any kind with respect to such information. You agree that you will not send or post any material that is unlawful, threatening, libelous, defamatory, obscene, scandalous, inflammatory, pornographic, or profane, or any material that could constitute or encourage conduct that would be considered a criminal offense or give rise to civil liability.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">4. Links to Third-Party Sites</h3>
                  <p>
                    Hoist Hydraulics does not accept responsibility for material created or published by third-party sites that may be accessed through a link on this site. The presence of any such links does not indicate approval or endorsement of any material contained on linked sites. Hoist Hydraulics is in no way responsible for any damage that may result from the use of the contents of this website or any linked site.
                  </p>
                </div>
              </div>
            </section>
            <p className="mt-8">
              If you have any questions about this warranty or disclaimer, please contact us at the relevant Hoist Hydraulics office listed above.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Warranty
