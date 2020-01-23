<script>
    import Header from './UI/Header.svelte';
    import Button from './UI/Button.svelte';
    import MeetupGrid from "./Meetups/MeetupGrid.svelte";
    import EditMeetup from './Meetups/EditMeetup.svelte';
    import TextInput from "./UI/TextInput.svelte";

    

    let meetups = [
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
    ];

    let editMode = null;

    function addMeetup(event) {
        const newMeetup = {
            id: Math.random().toString(),
            title: event.detail.title,
            subtitle: event.detail.subtitle,
            description: event.detail.description,
            imageUrl: event.detail.imageUrl,
            contactEmail: event.detail.email,
            address: event.detail.address
        }

        meetups = [newMeetup, ...meetups];
        editMode = null;
    }

    function cancelEdit() {
        editMode = null;
    }

    function toggleFavorite(event) {
        const id = event.detail;
        const updatedMeetup = {...meetups.find(m => m.id === id)};
        updatedMeetup.isFavorite = !updatedMeetup.isFavorite;
        const meetupIndex = meetups.findIndex(m => m.id === id);
        const updatedMeetups = [...meetups];
        updatedMeetups[meetupIndex] = updatedMeetup;
        meetups = updatedMeetups;
    }
</script>

<style>
    main {
        margin-top: 5rem;
    }

    .meetup-controls {
        margin: 1rem;
    }


</style>

<Header />
<main>
    <div class="meetup-controls">
        <Button caption="" on:click={() => editMode = 'add'} >New Meetup</Button>
    </div>
    {#if editMode === 'add'}
        <EditMeetup on:save="{addMeetup}" on:cancel="{cancelEdit}"/> 
    {/if}
    <MeetupGrid {meetups} on:toggle-favorite="{toggleFavorite}" />
</main>