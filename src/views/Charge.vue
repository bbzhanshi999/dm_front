<template>
    <el-container>
        <el-header>
            <!-- 功能区域，收费，暂存，清除，-->
            <el-row class="header">
                <el-col :span="5" style="padding-left: 10px">
                    <el-button type="primary" size="mini">收费</el-button>
                    <el-button type="success" size="mini">暂存</el-button>
                    <el-button type="danger" size="mini">重置</el-button>
                </el-col>
            </el-row>
        </el-header>
        <el-main>
           <!-- 显示当前病历信息，关联药品采购单信息-->
            <el-row style="border-bottom: beige 1px solid;height: 40px;line-height: 40px" :gutter="20">
                <el-col :span="3">
                    <el-input  placeholder="病历号" label="病历号" size="mini"></el-input>
                </el-col>
                <el-col :span="3">
                    <el-input  placeholder="患者姓名" label="患者姓名" size="mini"></el-input>
                </el-col>
                <el-col :span="3">
                    <el-input  placeholder="性别" label="性别" size="mini"></el-input>
                </el-col>
                <el-col :span="3">
                    <el-input  placeholder="年龄" label="年龄" size="mini"></el-input>
                </el-col>
                <el-col :span="3">
                    <el-input  placeholder="处方医生" label="处方医生" size="mini"></el-input>
                </el-col>
                <el-col :span="3">
                    <el-input  placeholder="合同类型" label="合同类型" size="mini"></el-input>
                </el-col>
                <el-col :span="3">
                    <el-input  placeholder="日期" label="日期" size="mini"></el-input>
                </el-col>
            </el-row>
            <el-table>
                <el-table-column></el-table-column>
                <el-table-column></el-table-column>
                <el-table-column></el-table-column>
                <el-table-column></el-table-column>
            </el-table>
        </el-main>
        <el-footer class="footer" style="height: 150px">
            <!-- 显示总价，自费价格。实收现金，应找零，当日总金额，当日笔数-->
            <el-row>
                <el-col :span="8" style="border-right: 1px darkgrey solid">
                    <el-row style="height: 150px">
                        <el-col :span="12">
                            <h4>当日总金额</h4>
                            <h1 class="bold-content">15.1元</h1>
                        </el-col>
                        <el-col :span="12">
                            <h4>当日总笔数</h4>
                            <h1 class="bold-content">11笔</h1>
                        </el-col>
                    </el-row>
                </el-col>
                <el-col :span="10" style="line-height: 60px;padding-left: 30px;padding-top: 15px" >
                    <el-row :gutter="20">
                        <el-col :span="12" :gutter="20">
                            <el-input v-model="query" placeholder="总价" size="mini">
                                <template slot="prepend">总价&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</template>
                            </el-input>
                        </el-col>
                        <el-col :span="12" :gutter="20">
                            <el-input v-model="query" placeholder="自费价格" size="mini">
                                <template slot="prepend">自费价格</template>
                            </el-input>
                        </el-col>
                    </el-row>
                    <el-row :gutter="20">
                        <el-col :span="12">
                            <el-input v-model="query" placeholder="实收现金" size="mini">
                                <template slot="prepend">实收现金</template>
                            </el-input>
                        </el-col>
                        <el-col :span="12">
                            <el-input v-model="query" placeholder="应找零" size="mini">
                                <template slot="prepend">应找零&nbsp;&nbsp;&nbsp;&nbsp;</template>
                            </el-input>
                        </el-col>
                    </el-row>
                </el-col>
            </el-row>
        </el-footer>
    </el-container>
</template>

<script>
    export default {
        name: "Charge",
        data() {
            return {
                query: 12
            }
        }
    }
</script>

<style scoped>
    .header {
        margin-top: 10px;
        line-height: 50px;
        height: 50px;
        background-color: #F2F2F2;
    }

    .footer {
        background-color: #F2F2F2;
        position: fixed;
        height: 150px;
        width: 100%;
        bottom: 0px;
    }

    .bold-content {
        color: #F56C6C;
        font-size: 30px;
    }
</style>
