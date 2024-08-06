import React from "react"
import { Link } from "@inertiajs/react"
import Navigation from "../../Components/Client/Navigation"
import { ServiceContainer, NewService } from "../../Components/Client/ServiceContainer"

export default function Overview() {
    return (
        <>
            <header className="bg-surface rounded-b-[50px]">
                <Navigation />

                <div className="container py-8">
                    <h3 className="text-lg font-medium mb-8">Your services</h3>

                    <div className="flex gap-8">
                        <ServiceContainer />
                        <ServiceContainer />
                        <NewService />
                    </div>
                </div>
            </header>

            <main>
                <div className="container mt-12 grid md:grid-cols-2 ">
                    <div>
                        <h3 className="text-lg font-medium mb-8">Support Tickets</h3>
                    </div>

                    <div>
                        <h3 className="text-lg font-medium mb-8">Invoices</h3>
                    </div>
                </div>
            </main>
        </>
    )
}