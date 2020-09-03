import Home from './../components/home';
import About from './../components/about';
import Projects from './../components/projects';
import Contacts from './../components/contacts';

export const pages = [
    {
        title: 'ÍNICIO',
        url: '',
        description: '',
        subtitle: '',
        body: Home
    },
    {
        title: 'SOBRE',
        url: 'about',
        body: About
    },
    {
        title: 'PROJETOS',
        url: 'projects',
        body: Projects
    },
    {
        title: 'CONTATO',
        url: 'contacts',
        body: Contacts
    }
];
