<template>
    <div style="padding: 10px">
        <el-row class="header">
            <el-col :span="3" style="padding-left: 10px">
                <!--<el-input v-model="query" placeholder="用户名" size="mini"></el-input>-->
                <el-input  v-model="query" placeholder="请输入用户名" size="mini">
                    <template slot="prepend"><i class="fa fa-user"></i> </template>
                </el-input>
            </el-col>
            <el-col :span="5">
                <el-button @click="search" size="mini">查询</el-button>
                <el-button type="primary" @click="showUpdate" size="mini">修改</el-button>
                <el-button type="warning" size="mini" s>删除</el-button>
            </el-col>
        </el-row>
        <el-row class="main">
            <el-table style="width: 100%"
                      :data="employees"
                      highlight-current-row
                      @current-change="handleRowChange"
            >
                <el-table-column prop="username" label="用户名"></el-table-column>
                <el-table-column prop="name" label="姓名"></el-table-column>
                <el-table-column prop="phone" label="电话"></el-table-column>
                <el-table-column prop="department.departName" label="部门"></el-table-column>
            </el-table>
        </el-row>
        <el-row>
            <el-pagination
                    @current-change="handleCurrentChange"
                    :current-page.sync="pageInfo.pageNum"
                    :page-size="pageInfo.pageSize"
                    layout="total, prev, pager, next, jumper"
                    :total="pageInfo.total"
            ></el-pagination>
        </el-row>
        <el-dialog title="编辑职员信息" :visible.sync="showEditDialog">
            <el-form :model="selectedRow" size="mini" label-width="80px">
                <input type="hidden" name="id" :value="selectedRow.id"/>
                <el-form-item label="用户名">
                    <el-input v-model="selectedRow.username"></el-input>
                </el-form-item>
                <el-form-item label="密码">
                    <el-input v-model="selectedRow.password" type="password"></el-input>
                </el-form-item>
                <el-form-item label="姓名">
                    <el-input v-model="selectedRow.name"></el-input>
                </el-form-item>
                <el-form-item label="电话">
                    <el-input v-model="selectedRow.phone"></el-input>
                </el-form-item>
                <el-form-item label="部门" style="text-align: left">
                    <el-select v-model="selectedRow.department.id" placeholder="请选择">
                        <el-option
                                v-for="depart in departments"
                                :key="depart.id"
                                :label="depart.departName"
                                :value="depart.id">
                            <span style="float: left">{{ depart.departName }}</span>
                            <span style="float: right; color: #8492a6; font-size: 13px">{{ depart.departCode }}</span>
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submit">保存</el-button>
                    <el-button @click="showEditDialog=false">关闭</el-button>
                </el-form-item>
            </el-form>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        name: "EmployeeList",
        data() {
            return {
                query: '',
                departments: [],
                showEditDialog: false,
                employees: [],
                selectedRow: {
                    id: '',
                    username: '',
                    password: '',
                    phone: '',
                    name: '',
                    department: {
                        id: '',
                        departName: '',
                        departCode: ''
                    }
                },
                pageInfo: {
                    total:0,
                    pageNum: 1,
                    pageSize: 10
                }
            }
        },
        methods: {
            handleRowChange(val) {
                this.selectedRow = val;
            },
            showUpdate() {
                this.showEditDialog = true
            },
            submit() {
                this.axios.post("/api/employee/save", this.selectedRow).then(res => {
                    if (res.data.status && res.data.status === 'success') {
                        this.$message({
                            message: '保存成功',
                            type: 'success',
                        });
                        this.clear()
                    }
                }).catch(err => {

                })
            },
            clear() {
                this.selectedRow = {
                    id: '',
                    username: '',
                    password: '',
                    phone: '',
                    name: '',
                    department: {
                        id: '',
                        departName: '',
                        departCode: ''
                    }
                };
                this.showEditDialog = false;
            },
            getDepart() {
                this.axios.post("/api/department/find", {}).then(res => {
                    this.departments = res.data
                }).catch(err => {
                    console.log(err)
                })
            },
            getData() {
                this.axios.post("/api/employee/find", null, {
                    headers: {"Content-Type": "application/x-www-form-urlencoded"},
                    params: {
                        username: this.query,
                        pageNum: this.pageInfo.pageNum,
                        pageSize: this.pageInfo.pageSize
                    }
                }).then(res => {
                    this.employees = res.data.list;
                    this.pageInfo.total = res.data.total;
                    this.pageInfo.pageSize = res.data.pageSize;
                    this.pageInfo.pageNum = res.data.pageNum;
                }).catch(err => {
                    console.log(err)
                })
            },
            handleCurrentChange() {
                this.getData()
            },
            search(){
                this.pageInfo.pageNum = 1;
                this.getData();
            }
        },
        created() {
            this.getDepart();
            this.getData()
        }
    }
</script>

<style scoped>
    .header {
        margin-top: 10px;
        line-height: 50px;
        height: 50px;
    }

    .main {
        border-top: grey 1px solid;
    }
</style>
