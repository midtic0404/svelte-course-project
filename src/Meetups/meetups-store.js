import { writable } from 'svelte/store';

const meetups = writable([
    {
        id: 'm1',
        title: 'Coding Bootcamp',
        subtitle: 'Learn to code',
        description: 'Experts helps you!',
        imageUrl: 'https://www.codingdojo.com/blog/wp-content/uploads/coding-bootcamps-vs-cs-degrees.png',
        address: '234 Rd',
        contactEmail: 'test@code.com',
        isFavorite: false
    },
    {
        id: 'm2',
        title: 'Swimming Club',
        subtitle: 'swimming is fun',
        description: 'Experts helps you!',
        imageUrl: 'https://www.gotokyo.org/en/spot/1030/images/1030_0840_2_750x503.jpg',
        address: '234 Rd',
        contactEmail: 'swimfun@test.com',
        isFavorite: false
    },
]);

const customMeetupsStore = {
    subscribe: meetups.subscribe,
    addMeetup: (meetupData) => {
        const newMeetup = {
            ...meetupData,
            id: Math.random().toString(),
            isFavorite: false
        }
        meetups.update(items => {
            return [newMeetup, ...items];
        });
    },
    updateMeetup: (id, meetupData) => {
        meetups.update(items => {
            const mIndx = items.findIndex(item => item.id === id);
            const updatedMeetup = {...items[mIndx], ...meetupData};
            const updatedMeetups = [...items];
            updatedMeetups[mIndx] = updatedMeetup;
            return updatedMeetups;
        })
    },
    toggleFavorite: (id) => {
        meetups.update(items => {
            const updatedMeetup = {...items.find(m => m.id === id)};
            updatedMeetup.isFavorite = !updatedMeetup.isFavorite;
            const meetupIndex = items.findIndex(m => m.id === id);
            const updatedMeetups = [...items];
            updatedMeetups[meetupIndex] = updatedMeetup;
            return updatedMeetups;

        })
    }
}

export default customMeetupsStore;