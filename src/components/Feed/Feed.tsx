import { FeedItem } from "./FeedItem";
import "./Feed.css";
import {useEffect, useState} from "react";

interface GoldData {
    gold: number;
    gold_reliable: number;
    gold_unreliable: number;
}

interface GpmData {
    gpm: number;
}

interface Event {
    name: string;
    data: GoldData | GpmData;
}

interface ParsedData {
    events: Event[];
    timestamp: number;
}
export function Feed({ title, data }: { title: string; data: string }) {
    const [parsedData, setParsedData] = useState<ParsedData | null>(null);

    const [visible, setVisible] = useState<boolean>(true);

    useEffect(() => {
        try {
            const rawData = JSON.parse(data);

            if (rawData && Array.isArray(rawData.events)) {
                const events = rawData.events.map((event: any) => ({
                    ...event,
                    data: JSON.parse(event.data),
                }));
                setParsedData({ events, timestamp: rawData.timestamp });
            }
        } catch (error) {
            console.error("Failed to parse data:", error);
        }
    }, [data]);

    return (
        <div className="feed-container">
            <p>{title}</p>
            <button className="button-85" role="button" onClick={()=>{setVisible(!visible)}}> Toggle View
            </button>
            {visible && (<div className="black">
                {parsedData ? (
                    <>
                        <div className="timestamp">Timestamp: {parsedData.timestamp}</div>
                        {parsedData.events.map((el, index) => (
                            <div className="pink" key={index}>
                                <p>Event Name: {el.name}</p>
                                {el.name === "gold" && "gold" in el.data && (
                                    <>
                                        <p>Gold: {(el.data as GoldData).gold}</p>
                                        <p>Reliable Gold: {(el.data as GoldData).gold_reliable}</p>
                                        <p>Unreliable Gold: {(el.data as GoldData).gold_unreliable}</p>
                                    </>
                                )}
                                {el.name === "gpm" && "gpm" in el.data && (
                                    <p>GPM: {(el.data as GpmData).gpm}</p>
                                )}
                            </div>
                        ))}
                    </>
                ) : (
                    <p>No events available</p>
                )}
            </div>)}
        </div>
    );
}