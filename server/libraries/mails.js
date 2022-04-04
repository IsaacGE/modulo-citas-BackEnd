const nodemailer = require('nodemailer');
const Hogan = require('hogan.js');
const fs = require('fs');
const path = require('path');
let htmlF = '';

const mainEmail = `"Alertas Academicas" <${process.env.DIRECCION_CORREO}>`;

class email {
    constructor() {

        this.transport = nodemailer.createTransport({

            host: 'smtp.office365.com',
            service: 'outlook',
            port: 587,
            secure: false,
            auth: { user: process.env.DIRECCION_CORREO, pass: process.env.CONTRASENIA_CORREO },
            tls: {
                rejectUnauthorized: false
            }
        });
        this.mailOptions = {
            from: `"Alertas Academicas" <${process.env.DIRECCION_CORREO}>`
        };
    }

    sendEmail(jsnInfoEmail) {

        let compiledTemplate;

        if (jsnInfoEmail.nmbEmail === 1) { //sin parametros
            const template = fs.readFileSync(path.resolve(__dirname, `../assets/templates/correo.html`), 'utf-8');
            compiledTemplate = Hogan.compile(template);
            htmlF = compiledTemplate.text;
        }

        if (jsnInfoEmail.nmbEmail === 2) { //con parametros
            const template = fs.readFileSync(path.resolve(__dirname, `../assets/templates/index.html`), 'utf-8');
            compiledTemplate = Hogan.compile(template);
            htmlF = compiledTemplate.render({ 'strName': jsnInfoEmail.strName, 'strFolio': jsnInfoEmail.strFolio }); //agregar parametros aqui
        }

        if (jsnInfoEmail.nmbEmail === 3) { //usuario aceptado a moodle
            const template = fs.readFileSync(path.resolve(__dirname, `../assets/templates/correoAceptados.html`), 'utf-8');
            compiledTemplate = Hogan.compile(template);
            htmlF = compiledTemplate.render({ 'strName': jsnInfoEmail.strName, 'strPwd': jsnInfoEmail.strPwd, 'strMatricula': jsnInfoEmail.strMatricula, 'strLiga': jsnInfoEmail.strLiga }); //agregar parametros aqui
        }

        if (jsnInfoEmail.nmbEmail === 4) { //con parametros
            const template = fs.readFileSync(path.resolve(__dirname, `../assets/templates/recuperaContrasenia.html`), 'utf-8');
            compiledTemplate = Hogan.compile(template);
            htmlF = compiledTemplate.render(jsnInfoEmail); //agregar parametros aqui
        }

        if (jsnInfoEmail.nmbEmail === 5) { //con parametros
            const template = fs.readFileSync(path.resolve(__dirname, `../assets/templates/nuevaContrasenia.html`), 'utf-8');
            compiledTemplate = Hogan.compile(template);
            htmlF = compiledTemplate.render(jsnInfoEmail); //agregar parametros aqui
        }

        if (jsnInfoEmail.nmbEmail === 6) { //con parametros
            const template = fs.readFileSync(path.resolve(__dirname, `../assets/templates/correoAdministradores.html`), 'utf-8');
            compiledTemplate = Hogan.compile(template);
            htmlF = compiledTemplate.render({ 'strName': jsnInfoEmail.strName, 'strPassword': jsnInfoEmail.strPassword, 'strLink': jsnInfoEmail.strLink, 'strEmail': jsnInfoEmail.strEmail }); //agregar parametros aqui
        }

        if (jsnInfoEmail.nmbEmail === 7) { //con parametros
            const template = fs.readFileSync(path.resolve(__dirname, `../assets/templates/correoBienvenida.html`), 'utf-8');
            compiledTemplate = Hogan.compile(template);
            htmlF = compiledTemplate.render(jsnInfoEmail); //agregar parametros aqui
        }

        if (jsnInfoEmail.nmbEmail === 8) { //con parametros
            const template = fs.readFileSync(path.resolve(__dirname, `../assets/templates/correoNuevoUsuario.html`), 'utf-8');
            compiledTemplate = Hogan.compile(template);
            htmlF = compiledTemplate.render(jsnInfoEmail); //agregar parametros aqui
        }

        if (jsnInfoEmail.nmbEmail === 9) { //con parametros
            const template = fs.readFileSync(path.resolve(__dirname, `../assets/templates/correoNuevoSeguimiento.html`), 'utf-8');
            compiledTemplate = Hogan.compile(template);
            htmlF = compiledTemplate.render(jsnInfoEmail); //agregar parametros aqui
        }

        if (jsnInfoEmail.nmbEmail === 10) { //con parametros
            const template = fs.readFileSync(path.resolve(__dirname, `../assets/templates/correoNuevaAlerta.html`), 'utf-8');
            compiledTemplate = Hogan.compile(template);
            htmlF = compiledTemplate.render(jsnInfoEmail); //agregar parametros aqui
        }
        if (jsnInfoEmail.nmbEmail === 11) { //con parametros
            const template = fs.readFileSync(path.resolve(__dirname, `../assets/templates/correoInvitado.html`), 'utf-8');
            compiledTemplate = Hogan.compile(template);
            htmlF = compiledTemplate.render(jsnInfoEmail); //agregar parametros aqui
        }

        const emailBody = {
            from: mainEmail,
            to: jsnInfoEmail.strEmail,
            subject: jsnInfoEmail.subject,
            html: htmlF
        };

        this.transport.sendMail(emailBody, (err) => {
            if (process.log) { console.log('[Enviando Correo]'.yellow); }

            if (err) {
                return console.log(err.message);
            }
        });
    }
}

module.exports = new email();
