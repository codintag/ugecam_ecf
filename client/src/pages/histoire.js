import React, { Component } from 'react'

class Histoire extends Component {
    render() {
        return (
            <div>
                <h1 className="container-fluid bg-grey shadow-sm p-3 mb-5 bg-white rounded">Un peu d'histoire</h1>
                <div className="jumbotron text-justify">
                <h4 className="text-center my-4">1945 : les établissements de santé de l’Assurance Maladie</h4>
                <p className="container">
                Pour répondre aux besoins de santé de l’après-guerre, l'Assurance Maladie a développé une offre de soins et de prises en charge au sein d’établissements sanitaires et médico-sociaux. Au fil des années et des évolutions démographiques, économiques, sociales et technologiques, l’Assurance Maladie a adapté son offre de soins et ses modes de prise en charge.</p>

                <h4 className="text-center my-4">2000 : mise en place des UGECAM</h4>
                <p className="container">La loi portant sur la réforme hospitalière de 1991 et les ordonnances de 1996 portant sur la réforme de l'hospitalisation publique et privée ont permis à l’Assurance Maladie d’être représentée au sein des instances décisionnelles des Agences régionales de l’hospitalisation (ARH).
                </p>
                <p className="container">Dès lors, pour renforcer la lisibilité de l’offre de santé sur le territoire, une séparation juridique des établissements de santé et des caisses d’assurance maladie gestionnaires devenait nécessaire.</p>
                

                <p className="container">13 Unions pour la gestion des établissements des caisses de l’Assurance Maladie (UGECAM) sont ainsi créées entre 1998 et 2000.</p>

                <p className="container">Organismes de droit privé à but non lucratif, les UGECAM gère les établissements de santé privés d’intérêt collectif (ESPIC) de l’Assurance Maladie. Elle oriente, organise et développe leurs activités en cohérence avec les besoins de son territoire de santé. Elle est garante des valeurs de l’Assurance Maladie : l’accès et la continuité des soins pour tous.</p>

                <h4 className="text-center my-4">2009 : création du GROUPE UGECAM</h4>
                <p className="container">Une direction nationale est créée pour consolider la place des établissements au niveau national et fédérer les UGECAM en un véritable groupe de dimension nationale. Le GROUPE UGECAM voit ainsi le jour en 2009.</p>
                </div>
            </div>
        )
    }
}


export default Histoire;