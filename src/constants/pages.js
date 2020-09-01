import Home from './../components/home';
import About from './../components/about';
import Projects from './../components/projects';
import Contacts from './../components/contacts';

export const pages = [
    {
        title: 'Ínicio',
        url: '',
        description: '',
        subtitle: '',
        body: Home
    },
    {
        title: 'Sobre',
        url: 'about',
        body: About
    },
    {
        title: 'Projetos',
        url: 'projects',
        body: Projects
    },
    {
        title: 'Contato',
        url: 'contacts',
        body: Contacts
    }
];
