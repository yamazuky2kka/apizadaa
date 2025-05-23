const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 3000;

app.get('/player/:id', async (req, res) => {
    const { id } = req.params;

    try {
        // Faz requisição pra API original
        const response = await axios.get(`https://infoff-by-sony.onrender.com/player/${id}`);

        // Pega os dados da API original
        const originalData = response.data;

        // Monta a resposta com teus créditos
        const myResponse = {
            creditos: 'yamazuky',
            status: originalData.status,
            data: originalData.data,
            msg: 'Dados fornecidos pela API de yamazuky'
        };

        // Envia pro cliente
        res.json(myResponse);

    } catch (error) {
        console.error(error);
        res.status(500).json({
            creditos: 'yamazuky',
            error: true,
            msg: 'Erro ao buscar dados'
        });
    }
});

app.listen(PORT, () => {
    console.log(`API do yamazuky rodando na porta ${PORT}`);
});