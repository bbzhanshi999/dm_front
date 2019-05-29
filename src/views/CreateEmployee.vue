<template>
    <div style="margin-top: 50px;">
        <el-row>
            <el-col :span="12" :offset="6">
                <h2>创建职员</h2>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="10" :offset="7">
                <el-form ref="form" :model="employee" label-width="80px">
                    <input type="hidden" name="id" :value="employee.id"/>
                    <el-form-item label="用户名">
                        <el-input v-model="employee.username"></el-input>
                    </el-form-item>
                    <el-form-item label="密码">
                        <el-input v-model="employee.password" type="password"></el-input>
                    </el-form-item>
                    <el-form-item label="姓名">
                        <el-input v-model="employee.name"></el-input>
                    </el-form-item>
                    <el-form-item label="电话">
                        <el-input v-model="employee.phone"></el-input>
                    </el-form-item>
                    <el-form-item label="部门" style="text-align: left">
                        <el-select v-model="employee.departId" placeholder="请选择">
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
                        <el-button type="primary" @click="submit">创建</el-button>
                        <el-button @click="clear">清空</el-button>
                    </el-form-item>
                </el-form>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: "CreateEmployee",
        data() {
            return {
                employee: {
                    id: '',
                    username: '',
                    password: '',
                    phone: '',
                    name: '',
                    departId: ''
                },
                departments:[]
            }
        },
        methods: {
            submit() {
                this.axios.post('/api/employee/save',this.employee).then(res=>{
                    if(res.data.status&&res.data.status==='success'){
                        this.$message({
                            message: '保存成功',
                            type: 'success',
                            onClose:()=>{
                                this.clear()
                            }
                        });
                    }
                }).catch(err=>{

                })
            },
            clear (){
                this.employee ={
                    id: '',
                    username: '',
                    password: '',
                    phone: '',
                    name: '',
                    departId: ''
                }
            }
        },
        created () {
            this.axios.post("/api/department/find",{}).then(res=>{
                this.departments = res.data
            }).catch(err=>{
                console.log(err)
            })
        }
    }
</script>

<style scoped>

</style>
