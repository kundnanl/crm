import {
    addNewContact,
    getAllContacts,
    getContactbyId,
    updateContact,
    deleteContactById
} from '../controllers/crmController'

const routes = (app) => {
    app.route('/contact')

        //get all contacts method
        .get(getAllContacts)

        //post method
        .post(addNewContact);


    app.route('/contact/:contactId')

        .get(getContactbyId)


    app.route('/contact/:contactId')
        .put(updateContact)
        .delete(deleteContactById);
}

export default routes;