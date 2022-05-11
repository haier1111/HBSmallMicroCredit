<template>
<div>
    <!-- <div class="crumbs">
        <el-breadcrumb separator="/">
            <el-breadcrumb-item>
                <i class="el-icon-lx-calendar"></i> 表单
            </el-breadcrumb-item>
            <el-breadcrumb-item>基本表单</el-breadcrumb-item>
        </el-breadcrumb>
    </div> -->
    <div class="container">
        <h3>押品1<el-popconfirm confirm-button-text='是' cancel-button-text='否' @confirm="confirm" @cancel="cancel" icon="el-icon-info" icon-color="red" title="是否添加已入库的抵质押物">
                <el-button type="primary" icon="el-icon-plus" slot="reference">增加</el-button>
            </el-popconfirm>
        </h3>
        <div class="">
            <el-form ref="formInline" :inline="true" label-position="right" :model="formInline" label-width="140px" class="">
                <template v-for="(item,index) in formInline.formList">
                    <el-card class="box-card" :key="index">
                    <h4 style="margin-top:15px;">抵质押物{{index+1}}<el-button type="primary">OCR识别</el-button><i style="float:right;cursor: pointer;" @click="delForlist(index)" class="el-icon-delete"></i></h4>

                    <el-form-item label="担保方式" prop="region" :rules="[{ required: true, message: '担保方式',trigger: 'change'}]">
                        <el-select v-model="item.region" placeholder="担保方式">
                            <el-option label="区域一" value="shanghai"></el-option>
                            <el-option label="区域二" value="beijing"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="抵质押物类型" prop="region1" :rules="[{ required: true, message: '抵质押物类型',trigger: 'change'}]">
                        <el-select v-model="item.region1" placeholder="担保方式">
                            <el-option label="区域一" value="shanghai"></el-option>
                            <el-option label="区域二" value="beijing"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="权利人名称" prop="region2" :rules="[{ required: true, message: '权利人名称',trigger: 'blur'}]">
                        <el-input v-model="item.region2" placeholder="权利人名称"></el-input>
                    </el-form-item>
                    <el-form-item label="产权号" prop="region3" :rules="[{ required: true, message: '产权号',trigger: 'blur'}]">
                        <el-input v-model="formInline.region3" placeholder="产权号"></el-input>
                    </el-form-item>
                    <el-form-item label="面积" prop="region4" :rules="[{ required: true, message: '面积',trigger: 'change'}]">
                        <el-select v-model="item.region4" placeholder="面积">
                            <el-option label="区域一" value="shanghai"></el-option>
                            <el-option label="区域二" value="beijing"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="使用情况" prop="region5" :rules="[{ required: true, message: '使用情况',trigger: 'change'}]">
                        <el-select v-model="item.region5" placeholder="使用情况">
                            <el-option label="区域一" value="shanghai"></el-option>
                            <el-option label="区域二" value="beijing"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="权证号2" prop="region6" :rules="[{ required: true, message: '权证号2',trigger: 'blur'}]">
                        <el-input v-model="item.region6" placeholder="权证号2"></el-input><i class="el-icon-circle-plus"></i>
                    </el-form-item>
                    <el-form-item label="面积2" prop="region7" :rules="[{ required: true, message: '面积2',trigger: 'change'}]">
                        <el-select v-model="item.region7" placeholder="面积">
                            <el-option label="区域一" value="shanghai"></el-option>
                            <el-option label="区域二" value="beijing"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="使用情况" prop="region8" :rules="[{ required: false, message: '使用情况',trigger: 'change'}]">
                        <el-select v-model="item.region8" placeholder="使用情况">
                            <el-option label="区域一" value="shanghai"></el-option>
                            <el-option label="区域二" value="beijing"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="具体位置" style="width:100%;">
                        <el-select v-model="item.region9" placeholder="省" style="width:80px">
                            <el-option label="区域一" value="shanghai"></el-option>
                            <el-option label="区域二" value="beijing"></el-option>
                        </el-select>
                        <el-select v-model="item.region10" placeholder="市" style="width:80px">
                            <el-option label="区域一" value="shanghai"></el-option>
                            <el-option label="区域二" value="beijing"></el-option>
                        </el-select>
                        <el-select v-model="item.region11" placeholder="区" style="width:80px">
                            <el-option label="区域一" value="shanghai"></el-option>
                            <el-option label="区域二" value="beijing"></el-option>
                        </el-select>
                        <el-input v-model="item.region12" placeholder="请输入" style="width:300px"></el-input>
                    </el-form-item>
                    <el-form-item label="共有人证书类型1" prop="region13" :rules="[{ required: true, message: '共有人证书类型1',trigger: 'change'}]">
                        <el-select v-model="item.region13" placeholder="身份证" style="width:200px">
                            <el-option label="身份证" value="111"></el-option>
                            <el-option label="户口本" value="2222"></el-option>
                        </el-select>
                        <i class="el-icon-remove"></i>
                        <i class="el-icon-circle-plus"></i>
                    </el-form-item>
                    <el-form-item label="共有人证书号" style="width:50%" prop="region14" :rules="[{ required: true, message: '共有人证书类型1',trigger: 'blur'}]">
                        <el-input v-model="item.region14" placeholder="请输入" style="width:140px"></el-input>
                        <el-button type="primary">查询</el-button>
                    </el-form-item>
                    <el-form-item label="" style="width:100%"></el-form-item>
                    <el-form-item label="是否已抵押" prop="region5" :rules="[{ required: true, message: '是否已抵押',trigger: 'change'}]">
                        <el-select v-model="item.region5" placeholder="是否已抵押">
                            <el-option label="区域一" value="shanghai"></el-option>
                            <el-option label="区域二" value="beijing"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="抵押银行" prop="region14" :rules="[{ required: true, message: '抵押银行',trigger: 'blur'}]">
                        <el-input v-model="item.region14" placeholder="请输入"></el-input>
                    </el-form-item>
                    <el-form-item label="" style="width:30%"></el-form-item>
                    <el-form-item label="他行抵押用途" prop="region5" :rules="[{ required: true, message: '他行抵押用途',trigger: 'change'}]">
                        <el-select v-model="item.region5" placeholder="他行抵押用途">
                            <el-option label="区域一" value="shanghai"></el-option>
                            <el-option label="区域二" value="beijing"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="抵押金额" prop="region14">
                        <el-input v-model="item.region14" placeholder="请输入"></el-input>
                    </el-form-item>
                    <el-form-item label="抵押期限" prop="region14">
                        <el-date-picker style="width:100%" v-model="item.value1" type="daterange" range-separator="-" start-placeholder="开始日期" end-placeholder="结束日期">
                        </el-date-picker>
                    </el-form-item>
                    <el-form-item label="是否租赁" prop="region5" :rules="[{ required: true, message: '是否租赁',trigger: 'change'}]">
                        <el-select v-model="item.region5" placeholder="是否租赁">
                            <el-option label="是" value="1"></el-option>
                            <el-option label="否" value="0"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="" style="width:50%"></el-form-item>
                    <el-form-item label="租户名" prop="region14">
                        <el-input v-model="item.region14" placeholder="请输入"></el-input>
                    </el-form-item>
                    <el-form-item label="年租金" prop="region14">
                        <el-input v-model="item.region14" placeholder="请输入"></el-input>
                    </el-form-item>
                    <el-form-item label="租赁期限" prop="region14">
                        <el-date-picker style="width:100%" v-model="item.value1" type="daterange" range-separator="-" start-placeholder="开始日期" end-placeholder="结束日期">
                        </el-date-picker>
                    </el-form-item>
                    <el-form-item label="取得方式" prop="region14" :rules="[{ required: true, message: '抵押银行',trigger: 'blur'}]">
                        <el-input v-model="item.region14" placeholder="请输入"></el-input>
                    </el-form-item>
                    <el-form-item label="购买价值(万元)" prop="region14" :rules="[{ required: true, message: '抵押银行',trigger: 'blur'}]">
                        <el-input v-model="item.region14" placeholder="请输入"></el-input>
                    </el-form-item>
                    <el-form-item label="提供担保抵押动机" prop="region14" :rules="[{ required: true, message: '抵押银行',trigger: 'blur'}]">
                        <el-input v-model="item.region14" placeholder="请输入"></el-input>
                    </el-form-item>
                    <el-form-item label="与授信申请人关系" prop="region5" :rules="[{ required: true, message: '请选择',trigger: 'change'}]">
                        <el-select v-model="item.region5" placeholder="请选择">
                            <el-option label="是" value="1"></el-option>
                            <el-option label="否" value="0"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="" style="width:50%"></el-form-item>
                    <el-form-item label="备注" prop="region14" style="width:100%">
                        <el-input type="textarea" v-model="item.region14"></el-input>
                    </el-form-item>

                    <el-row style="text-align:center">
                        <el-button type="primary">影像上传</el-button>
                    </el-row>
                    </el-card>
                </template>
            </el-form>
        </div>
    </div>
    <el-dialog title="提示" :visible.sync="dialogVisible" width="80%" :append-to-body=true>

        <search-table :searchList="searchListData" :tableForm="tableFormObj" @queryList="searchHandler">
            <el-button slot="button" type="primary">重置</el-button>
            <el-table-column slot="action" label="插槽" width="130">
                <template slot-scope="scoped">
                    {{scoped.row.action}}
                </template>
            </el-table-column>
            <el-table-column slot="operation" label="操作" width="130" fixed="right">
                <template slot-scope="scope">
                    <el-button type="text" @click="handleEdit(scope.$index, scope.row)">添加</el-button>
                    <el-button type="text" class="red" @click="handleDelete(scope.$index, scope.row)">详情</el-button>
                </template>
            </el-table-column>
        </search-table>
    </el-dialog>
</div>
</template>

<script>
const objForm = {
                    value1: '',
                    region: '',
                    region1: '',
                    region2: '',
                    region3: '',
                    region4: '',
                    region5: '',
                    region6: '',
                    region7: '',
                    region8: '',
                    region9: '',
                    region10: '',
                    region11: '',
                    region12: '',
                    region13: '',
                    region14: '',
                    region15: '',
                    region16: '',
                };
import searchTable from '../page/searchTable';
export default {
    name: 'baseform',
    components: {
        searchTable
    },
    data() {
        return {
            searchListData: [{
                    label: '客户名称',
                    type: 'input',
                    prop: '',
                    key: 'val',
                    placeholder: '请输入'
                },
                {
                    label: '权利人身份证号',
                    type: 'input',
                    prop: '',
                    key: 'val1',
                    placeholder: '请输入'
                },
            ],
            tableFormObj: {
                columnList: [{
                        label: "抵押物编号",
                        prop: "number",
                        width: 150,
                    },
                    {
                        label: "抵押物类型",
                        prop: "type",
                        width: 150,
                    },
                    {
                        slot: 'action'
                    },
                    {
                        label: "客户名称",
                        prop: "name",
                        width: 150,
                    },
                    {
                        label: "客户身份证号/统一社会信用代码",
                        prop: "id",
                        width: 250,
                    },
                     {
                        label: "具体位置",
                        prop: "ader",
                        width: 200,
                    },
                    {
                        slot: 'operation'
                    },
                ],
                tableData: [{
                        number:'353466',
                        type:'房产',
                        name: "张三张三",
                        id:'435436457566867',
                        ader: '金融港A18号楼',
                        action:'插槽'
                    },
                    {
                        number:'657568568',
                        type:'房产',
                        name: "张三张三22",
                        id:'435436457566867',
                        ader: '金融港A18号楼',
                        action:'插槽'
                    },
                    {
                        number:'979696796',
                        type:'房产',
                        name: "张三张三",
                        id:'435436457566867',
                        ader: '金融港A18号楼',
                        action:'插槽'
                    },
                    {
                        number:'657568568',
                        type:'房产',
                        name: "张三张三22",
                        id:'435436457566867',
                        ader: '金融港A18号楼',
                        action:'插槽'
                    },
                    {
                        number:'979696796',
                        type:'房产',
                        name: "张三张三",
                        id:'435436457566867',
                        ader: '金融港A18号楼',
                        action:'插槽'
                    },
                ],
            },
            dialogVisible: false,
            formInline: {
                formList: [{
                    value1: '',
                    region: '',
                    region1: '',
                    region2: '',
                    region3: '',
                    region4: '',
                    region5: '',
                    region6: '',
                    region7: '',
                    region8: '',
                    region9: '',
                    region10: '',
                    region11: '',
                    region12: '',
                    region13: '',
                    region14: '',
                    region15: '',
                    region16: '',
                }]
            }
        };
    },
    methods: {
        delForlist(_index){
            this.formInline.formList.splice(_index,1);
        },
        searchHandler(code) {
            alert('998')
        },
        handleEdit(index, row) {
            console.log(row)
        },
        onSubmit() {
            this.$message.success('提交成功！');
        },
        confirm() {
            this.dialogVisible = true;
        },
        cancel() {
            this.formInline.formList.push(JSON.parse(JSON.stringify(objForm)));
        },
        handleClose(done) {
            // this.$confirm('确认关闭？')
            //     .then(_ => {
            //         done();
            //     })
            //     .catch(_ => {});
        }
    }
};
</script>

<style scoped>
.container {
    padding: 20px;
}

.container h3 {
    font-size: 14px;
    border-bottom: 1px solid #eee;
    padding-bottom: 10px;
    margin-bottom: 10px;
}

.container h3 button {
    margin-left: 10px;
}

.container h4 {
    font-size: 14px;
    font-weight: normal;
    margin-bottom: 20px;
}

.container h4 button {
    margin-left: 68px;
}

.el-form--inline .el-form-item {
    width: 32%;
}

.el-select {
    width: 100%;
}

/deep/.el-form-item__content {
    width: 60%;
}

.el-icon-circle-plus {
    position: absolute;
    right: -20px;
    top: 8px;
    color: #409EFF;
}

.el-icon-remove {
    color: #409EFF;
}

/deep/.el-dialog__body {
    padding: 10px 20px 30px
}
.box-card{margin-bottom: 15px;}
</style>
