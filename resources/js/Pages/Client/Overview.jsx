import React from "react"
import Navigation from "../../Components/Client/Navigation/Navigation"
import { LargeServiceContainer } from '../../Components/Client/Services/LargeServiceContainer'
import { NewService } from '../../Components/Client/Services/NewService'

export default function Overview() {
    return (
        <>
            <header className="bg-surface rounded-b-[50px]">
                <Navigation />

                <div className="container py-8">
                    <h3 className="text-md font-medium mb-8">Your services</h3>

                    <div className="flex gap-8">
                        <LargeServiceContainer />
                        <NewService />
                    </div>
                </div>
            </header>

            <main>
                <div className="container mt-12 grid md:grid-cols-2 ">
                    <div>
                        <h3 className="text-md font-medium mb-8">Support Tickets</h3>
                    </div>

                    <div>
                        <h3 className="text-md font-medium mb-8">Invoices</h3>
                    </div>
                </div>
            </main>
        </>
    )
}