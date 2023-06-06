import express from "express";
import cors from "cors";
import { PrismaClient } from "@prisma/client";

import { convertHourStringToMinutes } from "./utils/convert-hour-string-to-minutes";
import { convertMinutesStringToHours } from "./utils/convert-minutes-to-hour-string";

const app = express()

app.use(express.json());
app.use(cors())

const prisma = new PrismaClient({
    log: ["query"]
});

app.get("/games", async (request, response) => {
    const games = await prisma.game.findMany({
        include: {
            _count: {
                select: {
                    Ads: true
                }
            }
        }
    });
    return response.status(200).json(games);
})

app.post("/games/:id/ads", async (request, response) => {
    const gameId = request.params.id;
    const body: any = request.body;

    const ad = await prisma.ad.create({
        data: {
            gameId,
            name: body.name,
            yearsPlaying: body.yearsPlaying,
            discord: body.discord,
            weekDays: body.weekDays.join(","),
            hourStart: convertHourStringToMinutes(body.hourStart),
            hourEnd: convertHourStringToMinutes(body.hourEnd),
            useVoiceChannel: body.useVoiceChannel,
        },
    });
    return response.status(201).json(ad);
});

app.get("/games/:id/ads", async (request, response) => {
    const gameId = request.params.id;
    const ads = await prisma.ad.findMany({
        select:{
            id: true,
            name: true,
            discord: true,
            weekDays: true,
            hourStart: true,
            yearsPlaying: true,
            hourEnd: true,
            useVoiceChannel: true,
        },
        where: {
            gameId
        },
        orderBy: {
            createdAt: "desc"
        }
    })

    return response.json(ads.map(ads => {
        console.log(ads)
        return {
            ...ads,
            weekDays: ads.weekDays.split(","),
            hourStart: convertMinutesStringToHours(ads.hourStart),
            hourEnd: convertMinutesStringToHours(ads.hourEnd),
        }
    }))
})

app.get("/ads/:id/discord", async (request, response) => {
    const adId = request.params.id

    const ad = await prisma.ad.findUniqueOrThrow({
        select: {
            discord: true
        },
        where: {
            id: adId
        }
    })

    return response.status(200).json({
        discord: ad.discord
    })   
})

app.listen(3333)