<script>
    import Header from './UI/Header.svelte';
    import Button from './UI/Button.svelte';
    import MeetupGrid from "./Meetups/MeetupGrid.svelte";
    import TextInput from "./UI/TextInput.svelte";

    let title = '';
    let subtitle = '';
    let address = '';
    let email = '';
    let description = '';
    let imageUrl = '';

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

    form {
        width: 30rem;
        max-width: 90%;
        margin: auto;
    }
</style>

<Header />
<main>
    <form on:submit|preventDefault="{addMeetup}"> 
        <TextInput 
            id="title"
            label="Title"
            value={title}
            on:input={event => (title = event.target.value)} />
        <TextInput 
            id="subtitle"
            label="Subtitle"
            value={subtitle}
            on:input={event => (subtitle = event.target.value)} />
        <TextInput 
            id="address"
            label="Address"
            value={address}
            on:input={event => (address = event.target.value)} />
        <TextInput 
            id="imageUrl"
            label="Image URL"
            value={imageUrl}
            on:input={event => (imageUrl = event.target.value)} />
        <TextInput 
            id="email"
            label="E-Mail"
            value={email}
            type="email"
            on:input={event => (email = event.target.value)} />
        <TextInput 
            id="description"
            label="Description"
            controlType="textarea"
            value={description}            
            on:input={event => (description = event.target.value)} />
        <Button type="submit" caption="Save" />
    </form>
    <MeetupGrid {meetups} on:toggle-favorite="{toggleFavorite}" />
</main>