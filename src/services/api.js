// API Service using Fetch (intercepted by MSW)

export const fetchEvents = async () => {
    const response = await fetch('/api/events');
    if (!response.ok) {
        throw new Error('Failed to fetch events');
    }
    return response.json();
};

export const fetchEventDetails = async (id) => {
    const query = `
    query GetEventDetails($id: ID!) {
      event(id: $id) {
        id
        title
        date
        location
        category
        imageUrl
        price
        description
        organizer
        attendees
        time
      }
    }
  `;

    const response = await fetch('/graphql', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query,
            variables: { id },
        }),
    });

    if (!response.ok) {
        throw new Error('Failed to fetch event details');
    }

    const result = await response.json();

    if (result.errors) {
        throw new Error(result.errors[0].message);
    }

    return result;
};
