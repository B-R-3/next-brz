"use client";
import { Card, CardHeader, CardTitle } from "@/src/components/ui/card";
export default async function Page(){
    await new Promise((r) => setTimeout(r, 1000));
    return (
        <Card>
            <CardHeader>
                <CardTitle> ❌ Error ❌ </CardTitle>
            </CardHeader>
        </Card>
    );
}