import React from 'react'

export default function Question() {
    return (
        <div className="card mb-3">
            <div className="card-header bg-primary text-white border-primary">
                C'est quoi la réponse à toute question dans l'univers?
            </div>
            <div className="card-body">
            <form>
                <div className="form-check">
                    <input className="form-check-input" type="radio" />
                    <label className="form-check-label">
                        Oui
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" />
                    <label className="form-check-label">
                        Non
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" />
                    <label className="form-check-label">
                        Je sais pas
                    </label>
                </div>
            </form>
            </div>
            <div className="card-footer bg-transparent">
                <button className="btn btn-primary">Voter</button>
            </div>
    </div>
    )
}
