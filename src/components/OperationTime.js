import React from 'react'
import '../css/operationtime.css'

export default function OperationTime() {
    return (
        <div className="operation-container">
            <div className="operation-wrapper">
                <h1> Hours of Operation</h1>
                <div className="operation-day">
                    Monday: 10am - 6pm
                </div>

                <div className="operation-day">
                    Tuesday: 10am - 6pm
                </div>

                <div className="operation-day">
                    Wednesday: 10am - 6pm
                </div>

                <div className="operation-day">
                    Thursday: 10am - 6pm
                </div>

                <div className="operation-day">
                    Friday: 10am - 6pm
                </div>

                <div className="operation-day">
                    Saturday: 10am - 6pm
                </div>

                <div className="operation-day">
                    Sunday: CLOSED
                </div>

            </div>
        </div>
    )
}
