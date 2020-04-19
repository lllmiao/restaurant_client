<template>
    <el-form ref="myForm" :model="myForm">
        <el-form-item label="账号">
            <el-input v-model:="myForm.username"/>
        </el-form-item>
        <el-form-item label="密码">
            <el-input v-model:="myForm.password"/>
        </el-form-item>
        <el-form-item>
            <el-button @click="onsubmit">登录</el-button>
        </el-form-item>
    </el-form>

</template>

<script>
    export default {
        data() {
            return {
                myForm: {
                    username: '',
                    password: ''
                }
            }
        },
        methods: {
            onsubmit() {
                console.log('submit!');
            }
        }
    }
</script>


<style scoped>

</style>
