import { Conversation } from "../model/conversation.model.js";
import { Message } from "../model/message.model.js";
import { getReciverSocketId, io } from "../SocketIO/server.js";

const sendMessage = async (req, res) => {
    // console.log("send",req.params.id,req.body.message);
    try {
        // const message = req.body.message OR
        const { message } = req.body;
        const { id: reciverId } = req.params;
        const senderId = req.user.id; //current login user

        let conversation = await Conversation.findOne({
            members: { $all: [senderId, reciverId] },
        });
        if (!conversation) {
            conversation = await Conversation.create({
                members: [senderId, reciverId],
            });
        }
        const newMessage = new Message({
            senderId,
            reciverId,
            message,
        });
        if (newMessage) {
            conversation.messages.push(newMessage._id);
        }

        // await conversation.save()
        // await newMessage.save()
        await Promise.all([conversation.save(), newMessage.save()]);

        const receiverSocketId=getReciverSocketId(reciverId) //comes from server.js
        if(receiverSocketId){
            io.to(receiverSocketId).emit("newMessage",newMessage)
        }

        return res.status(200).json(newMessage);
    } catch (error) {
        return res.status(500).json({
            message: error.message || error,
            error: true,
            success: false,
        });
    }
};

const getMessage = async (req, res) => {
    try {
        const { id: reciverId } = req.params;
        const senderId = req.user.id;

        // let conversation = await Conversation.findOne({
        //     members: { $all: [senderId, reciverId] },
        // })
        // const message = conversation.messages;  //only give message id
        // [
        //     "67c1b228445095562af5bc84"
        // ]


        // let conversation = await Conversation.findOne({
        //     members: { $all: [senderId, reciverId] },
        // }).populate("messages");
        // const message = conversation;
        // {
        //     "_id": "67c1b227445095562af5bc82",
        //     "members": [
        //         "67c1b220445095562af5bc77",
        //         "67c149adb8bdd30ffc1a441e"
        //     ],
        //     "messages": [
        //         {
        //             "_id": "67c1b228445095562af5bc84",
        //             "senderId": "67c1b220445095562af5bc77",
        //             "reciverId": "67c149adb8bdd30ffc1a441e",
        //             "message": "xbnxbnbxn",
        //             "createdAt": "2025-02-28T12:55:04.014Z",
        //             "updatedAt": "2025-02-28T12:55:04.014Z",
        //             "__v": 0
        //         }
        //     ],
        //     "createdAt": "2025-02-28T12:55:03.925Z",
        //     "updatedAt": "2025-02-28T12:55:04.013Z",
        //     "__v": 1
        // }
        let conversation = await Conversation.findOne({
            members: { $all: [senderId, reciverId] },
        }).populate("messages");
        if (!conversation) {
            return res.status(200).json([]);
        }
        const message = conversation.messages;
        // [
        //     {
        //         "_id": "67c1b228445095562af5bc84",
        //         "senderId": "67c1b220445095562af5bc77",
        //         "reciverId": "67c149adb8bdd30ffc1a441e",
        //         "message": "xbnxbnbxn",
        //         "createdAt": "2025-02-28T12:55:04.014Z",
        //         "updatedAt": "2025-02-28T12:55:04.014Z",
        //         "__v": 0
        //     }
        // ]
        
        return res.status(200).json(message);        
    } catch (error) {
        return res.status(500).json({
            message: error.message || error,
            error: true,
            success: false,
        });
    }
};

export { sendMessage, getMessage };
