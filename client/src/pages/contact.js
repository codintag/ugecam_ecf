import React, { Component } from 'react'
import axios from 'axios'

class Formualaire extends Component {
    constructor(props) {
        super(props);

        this.state = {
            nomPrenom: "",
            email: "",
            subject: "",
            phone: "",
            messages: ""
        }
    }

    handleLastname(e) {
        this.setState({nomPrenom: e.target.value});
    }

    handleContactMail(e) {
        this.setState({email: e.target.value});
    }

    handleSubject(e) {
        this.setState({subject: e.target.value});
    }

    handlePhone(e) {
        this.setState({phone: e.target.value})
    }

    handleMessage(e) {
        this.setState({messages: e.target.value});
    }

    handleContactSubmit(e) {
        e.preventDefault();
        axios.post('http://localhost:5000/messages/registerMessage', {
            nomPrenom: this.state.nomPrenom,
            email: this.state.email,
            subject: this.state.subject,
            phone: this.state.phone,
            messages: this.state.messages,
        }).then(() => {
            console.log('message ajouté')
        }).catch( (error) => console.log(error) ) 
    }


    render() {
        return (
            <div>
                <h1 className="container-fluid bg-grey shadow-sm p-3 mb-5 bg-white rounded">Contactez-nous!</h1>

    <div className="container mb-4">

        <form id="contact-form"  className="font-weight-bold">

                <div className="row my-4 py-4">
                <div className="col-md-6">
                    <div class="form-group">
                        <label htmlFor="name">Nom - Prenom</label>
                        <input type="text" className="form-control" id="name" placeholder="Nom " onChange={(e) => this.handleLastname(e)}/>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form-group">
                        <label htmlFor="email">Addresse E-mail</label>
                        <input type="email" className="form-control" id="email" placeholder="email" onChange={(e) => this.handleContactMail(e)}/>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form-group">
                        <label htmlFor="subject">Le sujet</label>
                        <input type="text" className="form-control"  id="subject" placeholder="votre sujet ..." onChange={(e) => this.handleSubject(e)}/>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form-group">
                        <label htmlFor="phone">Numero de téléphone</label>
                        <input type="text" className="form-control"  id="phone" onChange={(e) => this.handlePhone(e)}/>
                    </div>
                </div>
                <div className="col-md-12">
                    <div className="form-group">
                        <label htmlFor="message">Votre message</label>
                        <textarea name="message" id="message" cols="30" rows="5" placeholder="Ecrivez votre message ici..." className="form-control" onChange={(e) => this.handleMessage(e)}></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary font-weight-bold btn-block py-2" onClick = {(e) => this.handleContactSubmit(e)}>Envoyer</button>
                </div>
                </div>

        </form>
        </div>
                </div>
        )
    }
}



export default Formualaire;