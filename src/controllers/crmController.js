import mongoose from "mongoose";
import { ContactSchema } from "../models/crmModel";

const Contact = mongoose.model('Contact', ContactSchema);

export const addNewContact = async (req, res) => {
    try {
        const newContact = new Contact(req.body);
        const savedContact = await newContact.save();
        res.json(savedContact);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getAllContacts = async (req, res) => {
    try {
        const contacts = await Contact.find({});
        res.json(contacts);
    } catch (error) {
        res.status(500).send(error);
    }
};

export const getContactbyId = async (req, res) => {
    try {
        const contact = await Contact.findById(req.params.contactId);

        if (!contact) {
            return res.status(404).json({ message: 'Contact not found' });
        }

        return res.json(contact);
    } catch (error) {
        return res.status(500).send(error);
    }
};

export const updateContact = async (req, res) => {
    console.log('update function is called');
    try {
        const contact = await Contact.findOneAndUpdate( {_id: req.params.contactId}, req.body, {new: true});
        res.json(contact);
    } catch (error) {
        return res.status(500).send(error);
    }
}

export const deleteContactById = async (req, res) => {
    console.log('method is called');
    try {
        const contact = await Contact.findById(req.params.contactId);
        console.log(`this are the request params ${contact}`)
        if (!contact) {
          return res.status(404).json({ message: 'Contact not found' });
        }
    
        await contact.deleteOne();
        return res.json({ message: 'Contact removed successfully' });
        } catch (error) {
        return res.status(500).send(error);
    }
}