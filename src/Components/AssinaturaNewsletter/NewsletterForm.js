import React from "React";



export default function Newsletter() {
    return(
        <div className="newsletter">
            <div className="newsletter_container">
                <div className="newsletter_text">
                    <h1>Sua casa com as <br />
                    <strong>
                        melhores <br /> plantas
                    </strong>
                    </h1>
                    <p>
                    Encontre aqui uma vasta seleção de plantas para decorar a sua casa e torná-lo uma pessoa mais feliz no seu dia a dia. Entre com seu e-mail e assine nossa newsletter para saber das novidades da marca.
                    </p>
                </div>

                <form className="/">
                    <div className={formStyles.fieldGroup}>
                        <input type="email" placeholder="Insira seu E-mail" />
                        <button>Assinar Newsletter</button>
                    </div>
                </form>
            </div>
        </div>
    );
}