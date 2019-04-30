import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import express from 'express';
import * as bodyParser from "body-parser";
import cors from "cors";


admin.initializeApp(functions.config().firebase);

const app = express();
app.use(cors({ origin: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

exports.webApi = functions.https.onRequest(app);

app.get('/students', 
(req, res) => {
    admin
    .firestore()
    .collection('students')
    .get()
    .then((snapshot) => {
        const result: any = {};
        snapshot.forEach((doc) => {
            result[`${doc.id}`]  = doc.data();
        });
        res.send(Object.values(result));
      })
    .catch(err => res.send({ status: 'ERROR' }));
})

app.get('/subjects', 
(req, res) => {
    admin
    .firestore()
    .collection('subjects')
    .get()
    .then((snapshot) => {
        const result: any = {};
        snapshot.forEach((doc) => {
            result[`${doc.id}`]  = doc.data();
        });
        res.send(Object.values(result));
      })
    .catch(err => res.send({ status: 'ERROR' }));
})

app.post("/students", (req, res) => {
    const user = req.body;
    admin
        .firestore()
        .collection("students")
        .doc(user._id)
        .set(user)
        .then(data => res.send({ status: 'OK' }))
        .catch(err => res.send(err));
});

app.post("/subjects", (req, res) => {
    const subject = req.body;
    admin
        .firestore()
        .collection("subjects")
        .doc(subject._id)
        .set(subject)
        .then(data => res.send({ status: 'OK' }))
        .catch(err =>res.send(err));
});

app.post("/subjects", (req, res) => {
    const subject = req.body;
    console.log('add');
    admin
        .firestore()
        .collection("subjects")
        .doc(subject._id)
        .set(subject)
        .then(data => res.send({ status: 'OK' }))
        .catch(err =>res.send(err));
});

app.delete("/subjects", (req, res) => {
    const id = req.query.id;
    console.log(id);
    admin
        .firestore()
        .collection("subjects")
        .doc(id)
        .delete()
        .then(data => res.send({ status: 'OK' }))
        .catch(err =>res.send(err));
});


// // Delete a contact 
// app.delete('/contacts/:contactId', (req, res) => {
//     firebaseHelper.firestore
//         .deleteDocument(db, studentsCollection, req.params.contactId);
//     res.send('Document deleted');
// })

// // Update new contact
// app.patch('/contacts/:contactId', (req, res) => {
//     firebaseHelper.firestore
//         .updateDocument(db, studentsCollection, req.params.contactId, req.body);
//     res.send('Update a new contact');
// })
// // View a contact
// app.get('/contacts/:contactId', (req, res) => {
//     firebaseHelper.firestore
//         .getDocument(db, studentsCollection, req.params.contactId)
//         .then((doc: any) => res.status(200).send(doc));
// })
