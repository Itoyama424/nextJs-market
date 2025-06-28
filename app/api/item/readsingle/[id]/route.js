import { NextResponse } from "next/server"; 
import connectDB from "@/app/utils/database";
import { ItemModel } from "@/app/utils/schemaModels";

export async function GET(request, context) {
    const { params } = context;
    const resolvedParams = await params;
    const id = resolvedParams.id;
    console.log(id);
    try {
        await connectDB()
        const singleItem = await ItemModel.findById(id);

        return NextResponse.json({message: "アイテム読み取り成功（シングル）", singleItem : singleItem});

    } catch {
        return NextResponse.json({message: "アイテム読み取り失敗（シングル）"});
    }
}