<template>
    <el-container>
        <el-aside width="200px">
                <el-menu
                        :router="true"
                        default-active="2"
                        background-color="#545c64"
                        text-color="#fff"
                        active-text-color="#ffd04b">
                    <h3 class="title">药品管理系统</h3>
                    <el-submenu index="1">
                        <template slot="title">
                            <i class="fa fa-address-book"></i>
                            <span>职员管理</span>
                        </template>
                        <el-menu-item index="/index/createEmployee">
                            <i class="fa fa-user-o"></i>
                            <span slot="title">注册职员</span>
                        </el-menu-item>
                        <el-menu-item index="/index/employeeList">
                            <i class="fa fa-user"></i>
                            <span slot="title">职员列表</span>
                        </el-menu-item>
                    </el-submenu>
                    <el-menu-item index="/index/drug">
                        <i class="el-icon-menu"></i>
                        <span slot="title">药品管理</span>
                    </el-menu-item>
                    <el-menu-item index="/index/depart">
                        <i class="fa fa-building"></i>
                        <span slot="title">部门管理</span>
                    </el-menu-item>
                    <el-menu-item index="/index/charge">
                        <i class="fa fa-rmb"></i>
                        <span slot="title">药品收费</span>
                    </el-menu-item>
                    <el-menu-item index="/index/restore">
                        <i class="fa fa-money"></i>
                        <span slot="title">药品退费</span>
                    </el-menu-item>
                    <el-menu-item index="/index/detail">
                        <i class="fa fa-list-alt"></i>
                        <span slot="title">收费详情</span>
                    </el-menu-item>
                </el-menu>
        </el-aside>
        <el-main>
            <div class="main-title"></div>
            <transition appear
                        appear-active-class="animated fadeInRightBig"
                        name="custom-classes-transition" enter-active-class="animated  fadeInRightBig"
                        mode="out-in">
                <router-view></router-view>
            </transition>
        </el-main>
    </el-container>
</template>

<script>
    export default {
        name: "Index",
        data (){
          return {
              menuHeight:0
          }
        },
        computed: {
            username() {
                return this.$store.state.user.username;
            }
        }
    }
</script>

<style scoped>
    .el-aside, .el-main, .el-container, .el-menu {
        height: 100%;
        padding: 0
    }
    .title {
        margin: 0;
        height: 60px;
        line-height: 60px;
        background-color: #409EFF;
        color: white;
    }

    i.fa {
        margin-right: 5px;
        width: 24px;
        text-align: center;
        font-size: 18px;
        vertical-align: middle;
    }
    .main-title{
        margin: 0;
        height: 60px;
        line-height: 60px;
        background-color: #0CA578;
        width: 100%;
        box-shadow: grey 5px 5px 5px 2px ;
    }
</style>
