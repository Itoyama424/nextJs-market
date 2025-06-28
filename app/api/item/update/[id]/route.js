import { NextResponse } from "next/server"; 
import connectDB from "@/app/utils/database";
import { ItemModel } from "@/app/utils/schemaModels";


export async function PUT(request, context) {
    const reqBody = await request.json();

    const { params } = context;
    const resolvParams = await params;
    const id = resolvParams.id;

    try {
        await connectDB();
        const singleItem = await ItemModel.findById(id);

        if(singleItem.email = reqBody.email) {
            await ItemModel.updateOne({_id:id},reqBody);
            return NextResponse.json({message: "アイテム編集成功"});
        } else {
            return NextResponse.json({message: "他の人が作成したアイテムです。"});
        }

    } catch {
        return NextResponse.json({message: "アイテム編集失敗"});
    }
    
}