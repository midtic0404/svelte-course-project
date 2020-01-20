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

    function addMeetup() {
        const newMeetup = {
            id: Math.random().toString(),
            title: title,
            subtitle: subtitle,
            description: description,
            imageUrl: imageUrl,
            contactEmail: email,
            address: address
        }

        meetups = [newMeetup, ...meetups];
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


</style>

<Header />
<main>
    <Button caption="New Meetup" on:click={() => editMode = 'add'}/>
    {#if editMode === 'add'}
        <EditMeetup /> 
    {/if}
    <MeetupGrid {meetups} on:toggle-favorite="{toggleFavorite}" />
</main>