<template>

    <div class=".container-fluid" >

        <div class="row">
            <div class="col-md-12">
                <!--导航栏-->
                <nav class="navbar navbar-expand-lg sticky-top navbar-dark bg-dark">
                    <img style="width: 35px;height: 35px;margin-left: 110px" src="../assets/ms.png" />
                    <a class="btn btn-outline-info border-1" style="color: aliceblue;margin-left: 20px" href="http://localhost:8081/"
                       role="button">首页</a>
                    <a class="btn btn-outline-info border-0" style="color: aliceblue;margin-left: 15px" href="#"
                       role="button">食谱</a>
                    <a class="btn btn-outline-info  border-0" style="color: aliceblue;margin-left: 15px" href="#"
                       role="button">文学与美食</a>
                    <a class="btn btn-outline-info  border-0" style="color: aliceblue;margin-left: 15px" href="#"
                       role="button">餐厅</a>
                    <a class="btn btn-outline-info  border-0" style="color: aliceblue;margin-left: 15px" href="#"
                       role="button">休闲茶饮</a>
                    <a class="btn btn-outline-info  border-0" style="color: aliceblue;margin-left: 15px" href="#"
                       role="button">外国美食</a>
                    <a class="btn btn-outline-info  border-0" style="color: aliceblue;margin-left: 15px" href="#"
                       role="button">宅家美食</a>
                    <a class="btn btn-outline-info  border-0" style="color: aliceblue;margin-left: 15px" href="#"
                       role="button">外卖</a>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mr-auto">

                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                   data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    更多
                                </a>
                                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a class="dropdown-item" href="#">面包甜点</a>
                                    <div class="dropdown-divider"></div>
                                    <a class="dropdown-item" href="#">生鲜水果</a>
                                    <a class="dropdown-item" href="#">快餐小吃</a>
                                    <a class="dropdown-item" href="#">...</a>
                                </div>
                            </li>
                        </ul>
                        <!--搜索框-->
                        <form class="form-inline my-2 my-lg-0">
                            <input class="form-control mr-sm-2"  style="height: 35px" type="search" placeholder="试试搜：King" aria-label="Search">
                            <button class="btn btn-outline-info my-2 my-sm-0" style="height: 38px" type="submit">搜索</button>
                        </form>
                    </div>
                </nav>
            </div>
        </div>


        <!--主体-->
        <div class="row" style="padding: 0;margin-top:2%;margin-right: 15%;margin-left: 15%;">
            <!--轮播图占7/12-->
            <div class="col-md-8">
                <div class="row">
                    <div class="col-md-12">
                        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                            <ol class="carousel-indicators">
                                <li data-target="#carouselExampleControls" data-slide-to="0" class="active"></li>
                                <li data-target="#carouselExampleControls" data-slide-to="1"></li>
                                <li data-target="#carouselExampleControls" data-slide-to="2"></li>
                            </ol>

                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img class="d-block  w-100 h-75" src="../assets/wbbb2.png"
                                         alt="First slide">
                                </div>
                                <div class="carousel-item">
                                    <img class="d-block  w-100 h-75" src="../assets/wbbb10.jpg" alt="Second slide">
                                </div>
                                <div class="carousel-item">
                                    <img class="d-block  w-100 h-75" src="../assets/wbbb3.png"
                                         alt="Third slide">
                                </div>
                            </div>
                            <a class="carousel-control-prev" href="#carouselExampleControls" role="button"
                               data-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="sr-only">Previous</span>
                            </a>
                            <a class="carousel-control-next" href="#carouselExampleControls" role="button"
                               data-slide="next" style="margin-left: -5%">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="sr-only">Next</span>
                            </a>
                        </div>
                    </div>
                </div>

                <!--第二行占4/12-->
                <div class="row" style="padding: 0;margin-top:3%;">
                    <div class="col-md-4">
                        <div class="card mb-3">
                            <img class="card-img-top" src="../assets/wbbb6.jpg" alt="">
                            <div class="card-body">
                                <h6 class="card-title">鸡肉马沙拉</h6>
                                <p class="card-text" style="font-size: 13px">
                                    鸡肉马沙拉(Marsala)是意大利美式餐厅主打美食，丰富的味蕾来自多层次的香料及蔬菜的美味，是春夏之时里一道既简单又传统的意式经典料理...
                                </p>
                                <label> 2020-04-19 17:01 </label>
                            </div> <img class="love" src="../assets/love.png"/>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card mb-3">
                            <img class="card-img-top" src="../assets/wbbb7.jpeg" alt="">
                            <div class="card-body">
                                <h6 class="card-title">火烧云吐司</h6>
                                <p class="card-text" style="font-size: 13px">
                                    不论是阴雨绵绵的清晨还是阳光满布的清晨，一份温暖的火烧云土司足以开始美好的一天...
                                </p>
                                <label> 2020-04-19 17:01</label>
                            </div> <img class="love" src="../assets/love.png"/>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card mb-3">
                            <img class="card-img-top" src="../assets/wbbb4.jpg" alt="">
                            <div class="card-body">
                                <h6 class="card-title">法式蜂蜜松饼</h6>
                                <p class="card-text" style="font-size: 13px">
                                    松饼是面包的一种，可以放入烤面包机烤脆後涂点奶油吃，也可以随意夹起司、煎蛋或烤肉等等。大部分烹饪都注重色香味...
                                </p>
                                <label> 2020-04-19 17:01 </label>
                            </div> <img class="love" src="../assets/love.png"/>
                        </div>
                    </div>

                    <div class="col-md-4">
                        <div class="card mb-3">
                            <img class="card-img-top" src="../assets/wbbb9.jpg" alt="">
                            <div class="card-body">
                                <h6 class="card-title">烤冷面</h6>
                                <p class="card-text" style="font-size: 13px">
                                    “老板，加一根肠不要葱不要香菜。”
                                    “老板，多放辣椒，不要醋”
                                    “老板，我要酸甜口的，对了，多放些酱”
                                    “老板，……”
                                </p>
                                <label> 2020-04-19 17:01 </label>
                            </div> <img class="love" src="../assets/love.png"/>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card mb-3">
                            <img class="card-img-top" src="../assets/wbbb8.jpg" alt="">
                            <div class="card-body">
                                <h6 class="card-title">杨枝甘露</h6>
                                <p class="card-text" style="font-size: 13px">
                                    杨枝甘露指的是一种港式甜品，主要食材是西柚、芒果、西米，主要烹饪工艺是煮。芒果和西柚都含有丰富的维生素，是一道营养丰富的甜品。...
                                </p>
                                <label> 2020-04-19 17:01 </label>
                            </div> <img class="love" src="../assets/love.png"/>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card mb-3">
                            <img class="card-img-top" src="../assets/wbbb5.jpg" alt="">
                            <div class="card-body">
                                <h6 class="card-title">自制杨梅露</h6>
                                <p class="card-text" style="font-size: 13px">
                                    一斤杨梅二两冰糖一锅水，煮个十几二十分钟，不需要那么严格的配方和程序，关键是好喝有趣，既有美味又愉悦自己...
                                </p>
                                <label> 2020-04-19 17:01 </label>
                            </div> <img class="love" src="../assets/love.png"/>
                        </div>
                    </div>

                </div>

            </div><!-- 左边-->


            <!--右边-->
            <div class="col-md-4" style="padding-left: 40px;">
                <!--    文章-->
                <div class="list-group">
                    <li class="list-group active">
                        <div class="btn-group " id="mygroup1" role="group" aria-label="Basic example">
                            <a class="btn btn-outline-info active border-0 wenzhanglist"
                               href="#" role="button" id="zuixin" @click="test1">食谱</a>
                            <a class="btn btn-outline-info border-0 wenzhanglist"
                               href="#" role="button" id="repin" @click="test1">文学与美食</a>
                            <a class="btn btn-outline-info border-0 wenzhanglist"
                               href="#" role="button" id="suiji" @click="test1">餐厅</a>
                        </div>
                    </li>

                    <li class="list-group" id="zuixinli">
                        <a href="#" class="list-group-item list-group-item-action">减肥食谱一周瘦10斤，科学搭配</a>
                        <a href="#" class="list-group-item list-group-item-action">几分钟搞定一大盘早餐鸡蛋饼</a>
                        <a href="#" class="list-group-item list-group-item-action">自己在家做爆红款的鸳鸯珍珠奶茶</a>
                        <a href="#" class="list-group-item list-group-item-action">何老师的美食时间超级健康麻辣烫</a>
                        <a href="#" class="list-group-item list-group-item-action">抖音超火美食篇<img src="../assets/hot.png" style="margin-bottom:5px;width: 20px;height: 20px"></a>
                    </li>

                    <li class="list-group" STYLE="display: none" id="repinli">
                        <a href="#" class="list-group-item list-group-item-action">美食图书馆！我推荐这些书单…</a>
                        <a href="#" class="list-group-item list-group-item-action">美食流浅聊美食餐饮行业的生…</a>
                        <a href="#" class="list-group-item list-group-item-action">当萌妹子和美食遇到AR</a>
                        <a href="#" class="list-group-item list-group-item-action">推荐:宅家解馋的七部美食纪录片</a>
                        <a href="#" class="list-group-item list-group-item-action">听说疫情宅家DIY美食很火</a>
                    </li>
                    <li class="list-group" STYLE="display: none" id="suijili">
                        <a href="#" class="list-group-item list-group-item-action">中国的五星级餐厅有哪些？<img src="../assets/hot.png" style="margin-bottom:5px;width: 20px;height: 20px"></a>
                        <a href="#" class="list-group-item list-group-item-action">肯德基和麦当劳优先选哪个好呢？</a>
                        <a href="#" class="list-group-item list-group-item-action">如何评价《中餐厅》的餐厅环境？</a>
                        <a href="#" class="list-group-item list-group-item-action">人均220海底捞涨价!一块土豆1.5…</a>
                        <a href="#" class="list-group-item list-group-item-action">最新中国餐饮百强排行榜！</a>

                    </li>
                </div>

                <div class="list-group">
                    <a href="#" class="list-group-item list-group-item-action" id="listtop">
                        排行榜
                    </a>
                    <a href="#" class="list-group-item list-group-item-action"><i style="color:red">1.</i> 这不是肥皂，是可以吃的星空果冻！【在繁星坠落的夜晚】</a>
                    <a href="#" class="list-group-item list-group-item-action"><i style="color:red">2.</i>龙吟橘子【能剥皮的也不一定是真橘子！完美还原橘子分子料理】</a>
                    <a href="#" class="list-group-item list-group-item-action"><i style="color:red">3.</i>【木下大胃王】香辣Fire Hall</a>
                    <a href="#" class="list-group-item list-group-item-action ">关于一个00后的饮食日常，一个人也要好好地吃饭……</a>
                    <a href="#" class="list-group-item list-group-item-action ">5种最危险的“美食”</a>
                    <a href="#" class="list-group-item list-group-item-action ">【奇怪的料理】奥斯卡最佳美食创意短片，里面的寓意你明白了吗？</a>
                    <a href="#" class="list-group-item list-group-item-action ">何炅做过的美食大合集</a>
                    <a href="#" class="list-group-item list-group-item-action ">麦当劳39元半价桶,食客疯狂抢购,小程序崩溃,你有没有吃到呢?</a>
                    <a href="#" class="list-group-item list-group-item-action ">英国绅士第一次吃甘蔗，他哭了</a>
                    <a href="#" class="list-group-item list-group-item-action ">在油管上大火的UP主：李子柒</a>
                </div>

                <!--右边结束-->
            </div>

            <!-- 主体结束-->
        </div>

        <footer class="navbar-fixed-bottom bg-dark " id="foot">
            <div class="container" style="padding-top: 2px">
                <img src="../assets/ms.png" style="height: 20px;width: 20px;padding-right: 8px"/>
                加入歪比巴卜组
                <img src="../assets/ms.png" style="height: 20px;width: 20px;padding-left: 8px"/>
            </div>
        </footer>
    </div>
</template>
<script>

    // eslint-disable-next-line no-unused-vars
    import $ from 'jquery'

    export default {
        data() {
            return {
                form: {
                    name: '',
                    password: ''
                }
            }
        },
        methods:
            {
                onSubmit() {
                    this.$http.post("http://localhost:8081/admin/login", {
                        "name": this.name,
                        "password": this.password
                    }, {}).then(function (res) {
                        var rec = res.data
                        console.log(rec['code'])
                    }).catch(function (err) {
                        console.log(err)
                    })
                },
                test1(e) {
                    var tab = $(e.target).html()
                    if (tab === "食谱") {
                        $("#zuixinli").show()
                        $("#repinli").hide()
                        $("#suijili").hide()
                        $("#zuixin").click().addClass("active");//激活active
                        $("#zuixin").siblings().removeClass("active");//移出其他按钮active
                    } else if (tab === "文学与美食") {
                        $("#repinli").show()
                        $("#zuixinli").hide()
                        $("#suijili").hide()
                        $("#repin").click().addClass("active");
                        $("#repin").siblings().removeClass("active");
                    } else {
                        $("#suijili").show()
                        $("#repinli").hide()
                        $("#zuixinli").hide()
                        $("#suiji").click().addClass("active");
                        $("#suiji").siblings().removeClass("active");
                    }

                }
            }
    }
</script>
<style>
    .nav{

    }
    .wenzhanglist {
        margin-left: 7px;
        margin-right: 7px;
    }
    /*设着左下的小标题和内容*/
    .card-title{
        color: #4270f8;
        font-family: 微软雅黑;
        font-size: 17px;
    }
    .card-text{
        color: rgba(77, 72, 79, 0.68);
        font-size: 14px;
    }
    /*日期*/
    label{
        color: #5da2ff;
        font-size: 12px;
        padding-left: 62px;
    }
    .card {
        height: 450px;
        margin-bottom: 1rem;
        border: 0;
        box-shadow: 0px 0px 1px 0.3px rgba(221,212,227,0.19);
    }

    /*爱心设置*/
    .love{
        height: 25px;
        width: 25px;
        margin-left: 160px;
        margin-bottom: 10px;
    }
    /*”更多“*/
    #navbarSupportedContent{
        margin-left: 15px;
    }

    /*右下排行榜*/
    .list-group{
        margin-top: 10px;
        font-size: 15px;
    }
    #listtop{
        margin-top: 20px;
        background: #19a3b8;
        color: white;
        font-size: 17px;
    }
    #foot{
        color: #eaeaea;
        font-size: 15px;
        width: 100%;
        height: 28px;
        align-content: center;
    }
</style>