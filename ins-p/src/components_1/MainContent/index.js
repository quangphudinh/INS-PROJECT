import { FaRegComment, FaRegHeart, FaRegPaperPlane } from "react-icons/fa";
import { useEffect, useState } from "react";
import { getUser } from "../services/productsService";
import "./maincontent.css";

function MainContent() {

    const [data, setData] = useState([]);
    useEffect(() => {
        const fectApi = async () => {
            const result = await getUser();
            setData(result.reverse());
        }
        fectApi();
    }, []);

    var check = true;
    const handleChangeColor = (e) => {
        check = !check;
        if (check === true)
            e.target.style.color = "red";
        else
            e.target.style.color = "black";
    }

    console.log(data);

    return (
        <>
            <div className="post-content">
                {data.map((item) => (
                    <div className="post" key={item.id}>
                        {item.posts.map((post_item) => (
                            <div className="post-container" >
                                <div className="profile">
                                    <div className="post-header">
                                        <img className="post-avatar" src= {item.image} alt=""></img>
                                        <div className="post-username">{item.firstName} {item.lastName} {item.maidenName}</div>
                                        <div className="post-time">• 21 giờ</div>
                                    </div>
                                    <div className="text-content">
                                        <img className="post-image" src= {post_item.image} alt=""></img>
                                    </div>
                                    <div className="post-footer">
                                        <div className="icon">
                                            <FaRegHeart onClick={handleChangeColor} />
                                            <FaRegComment />
                                            <FaRegPaperPlane />
                                        </div>
                                        <div className="likes">{post_item.like} lượt thích</div>
                                        <div className="caption">
                                            <span class="username">{item.firstName} {item.lastName} {item.maidenName} : </span> {post_item.body}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>
                ))}
            </div>

            {/* <div class="post-container" >
                    <div class="profile">
                        <div class="post-header">
                            <img src="https://i.pinimg.com/236x/c2/15/6c/c2156c7573dafa03be49f2039079f03e.jpg" alt=""></img>
                            <div class="post-username">moingay1trangsach.vn</div>
                            <div class="post-time">• 21 giờ</div>
                        </div>
                        <div class="text-content">
                            <img src="https://i.pinimg.com/236x/14/8a/95/148a9550310f8ac88f22f97f41baacf3.jpg" alt=""></img>
                        </div>
                        <div class="post-footer">
                            <div className="icon">
                                <FaRegHeart onClick={handleChangeColor} />
                                <FaRegComment />
                                <FaRegPaperPlane />
                            </div>
                            <div class="likes">5.910 lượt thích</div>
                            <div class="caption">
                                <span class="username">moingay1trangsach.vn</span> Vào cái thời mà mùi hương cũng có thể làm giả, “rụng là cách duy nhất phân biệt với hoa giả”. Cũng như thế, chỉ có sự thật mới có thể...
                            </div>
                        </div>
                    </div>
                </div> */}

        </>
    )
}

export default MainContent;