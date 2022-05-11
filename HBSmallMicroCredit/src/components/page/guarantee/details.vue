<template>
<div class="box-details">
    <div class="crumbs">
        <el-breadcrumb separator="/">
            <el-breadcrumb-item>
                押品
            </el-breadcrumb-item>
            <el-breadcrumb-item>押品详情</el-breadcrumb-item>
        </el-breadcrumb>
    </div>
    <div class="container">
        <div class="form-box">
            <el-form :inline="true" label-position="left" ref="form" :model="form" label-width="130px">
                <el-form-item label="质押物类型">
                    <el-select v-model="form.region" placeholder="请选择">
                        <el-option key="bbk" label="步步高" value="bbk"></el-option>
                        <el-option key="xtc" label="小天才" value="xtc"></el-option>
                        <el-option key="imoo" label="imoo" value="imoo"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="入库权证件数">
                    <el-input v-model="form.name" placeholder="请输入"></el-input>
                </el-form-item>
                <el-form-item label="入库权证名称1">
                    <el-input v-model="form.name" placeholder="请输入"></el-input>
                </el-form-item>
                <el-form-item label="入库权证名称2">
                    <el-input v-model="form.name" placeholder="请输入"></el-input>
                </el-form-item>
                <el-form-item label="入库权证名称3">
                    <el-input v-model="form.name" placeholder="请输入"></el-input>
                </el-form-item>
                <el-form-item label="权证人证件类型" prop="region" :rules="[{ required: true, message: '担保方式',trigger: 'change'}]">
                    <el-select v-model="form.region" placeholder="请选择">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="权证人名称">
                    <el-input v-model="form.name" placeholder="请输入"></el-input>
                </el-form-item>
                <el-form-item label="共有人姓名">
                    <el-input v-model="form.name" type="textarea" placeholder="请输入"></el-input>
                </el-form-item>
                <el-form-item label="抵质押物类型" prop="region1">
                    <el-select v-model="form.region1" placeholder="担保方式">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="权利人名称" prop="region2">
                    <el-input v-model="form.region2" placeholder="权利人名称"></el-input>
                </el-form-item>
                <el-form-item label="权证号" prop="region2">
                    <el-input v-model="form.region2" placeholder="请输入"></el-input>
                </el-form-item>
                <el-form-item label="土地位置" prop="region2">
                    <el-input v-model="form.region2" placeholder="权利人名称"></el-input>
                </el-form-item>
                <el-form-item label="面积" prop="region2">
                    <el-input v-model="form.region2" placeholder="请输入"><template slot="append">平方米</template></el-input>
                </el-form-item>
                <el-form-item label="担保物评估方式" prop="region1">
                    <el-select v-model="form.region1" placeholder="请选择">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="担保物评估方法" prop="region1">
                    <el-select v-model="form.region1" placeholder="请选择">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="价值评估机构名称" prop="region2">
                    <el-input v-model="form.region2" placeholder="权利人名称"></el-input>
                </el-form-item>
                <el-form-item label="价值评估时间" prop="region2">
                    <el-input v-model="form.region2" placeholder="权利人名称"></el-input>
                </el-form-item>
                <el-form-item label="抵押物评估币种" prop="region1">
                    <el-select v-model="form.region1" placeholder="请选择">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="抵押物债权币种" prop="region1">
                    <el-select v-model="form.region1" placeholder="请选择">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="备注" prop="region2" class="el-form-box">
                    <el-input type="textarea" v-model="form.region2" placeholder="权利人名称"></el-input>
                </el-form-item>
                <el-form-item label="担保类型" prop="region1">
                    <el-select v-model="form.region1" placeholder="请选择">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item class="button-box">
                    <el-button type="primary" @dblclick.native="onSubmit">入库</el-button>
                    <el-button type="primary" @click="onSubmit">同意</el-button>
                    <el-button type="primary" @click="onSubmit">拒绝</el-button>
                    <el-button type="primary" @click="onSubmit">退回</el-button>
                </el-form-item>
                <!-- <details-code v-model="formObj"></details-code> -->
            </el-form>
        </div>
    </div>
</div>
</template>

<script>
// import DetailsCode from './detailsCode'
export default {
    name: 'Details',
    data() {
        return {
            form: {
                name: '',
                region: '',
                date1: '',
                date2: '',
                delivery: true,
                type: ['步步高'],
                resource: '小天才',
                desc: '',
                options: []
            },
            formObj: {
                name1: '1',
                name2: '2',
                name3: '3',
                name4: '4',
                region: '5',
            }
        };
    },
    components: {
      //  DetailsCode
    },
    methods: {
        onSubmit() {
            this.$message.success('提交成功！');
        }
    },
    watch: {
        // formobj: {
        //     handler(newName, oldName) {
        //         console.log(newName)
        //     },
        //     immediate: true,
        //     deep: true
        // }
    }
};
</script>

<style scoped>
.box-details {
    padding: 10px;
}

.form-box {
    width: 85%;
}

.container /deep/.el-form--inline .el-form-item__content {
    width: 230px;
}

.container /deep/.el-select {
    width: 100%;
}

.container /deep/.el-form-item--small.el-form-item {
    width: 40%;
}

/deep/.button-box,
/deep/.el-form-box {
    width: 100% !important;
}

/deep/.button-box .el-form-item__content {
    width: 100% !important;
}
</style>
