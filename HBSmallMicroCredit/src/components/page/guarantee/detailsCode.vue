<template>
import { watch } from 'fs';
    <div class="box-details">
        <div class="container">
            <div class="form-box">
                <el-form  :inline="true" label-position="left" ref="form" :model="form" label-width="130px">
                    <el-form-item label="质押物类型">
                        <el-select v-model="form.region" placeholder="请选择">
                            <el-option key="bbk" label="步步高" value="bbk"></el-option>
                            <el-option key="xtc" label="小天才" value="xtc"></el-option>
                            <el-option key="imoo" label="imoo" value="imoo"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="入库权证件数">
                        <el-input v-model="form.name1" placeholder="请输入"></el-input>
                    </el-form-item>
                    <el-form-item label="入库权证名称1">
                        <el-input v-model="form.name2" placeholder="请输入"></el-input>
                    </el-form-item>
                    <el-form-item label="入库权证名称2">
                        <el-input v-model="form.name3" placeholder="请输入"></el-input>
                    </el-form-item>
                    <el-form-item label="入库权证名称3">
                        <el-input v-model="form.name4" placeholder="请输入"></el-input>
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'DetailsCode',
    model:{
        prop:'formobj',
        event:'change'
    },
    props:['formobj'],
    data() {
        return {
            form: {
                name1: '',
                name2: '',
                name3: '',
                name4: '',
                region: '',
            }
        };
    },
    methods: {
        onSubmit() {
            this.$message.success('提交成功！');
        }
    },
    watch:{
        // formobj: {
        //     handler(newName, oldName) {
        //         this.$emit('change',newName)
        //     },
        //     immediate: true,
        //     deep: true
        // }
    }
};
</script>
<style scoped>
.box-details{
    padding:10px;
}
.form-box{
    width: 85%;
}
.container /deep/.el-form--inline .el-form-item__content{
    width: 230px;
}
.container /deep/.el-select{
    width: 100%;
}

.container /deep/.el-form-item--small.el-form-item{
    width: 40%;
}
/deep/.button-box,/deep/.el-form-box{
    width: 100%!important;
}
/deep/.button-box .el-form-item__content{
    width: 100%!important;
}
</style>
