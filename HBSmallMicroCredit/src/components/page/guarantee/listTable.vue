<template>
<div class="container">
    <el-breadcrumb separator="/">
        <el-breadcrumb-item>押品管理</el-breadcrumb-item>
        <el-breadcrumb-item><a href="/">列表页面</a></el-breadcrumb-item>
    </el-breadcrumb>
    <search-table :searchList="searchListData" :tableForm="tableFormObj" @queryList="searchHandler"  @selection-change="handleSelectionChange">
        <el-button slot="button" type="primary" @click="changeDisplaySlot">业务移交</el-button>
        <el-table-column slot="selection" type="selection" width="55">
        </el-table-column>
        <el-table-column slot="index" type="index" label="序号" width="130">
        </el-table-column>
        <el-table-column slot="action" label="插槽" width="130">
            <template slot-scope="scoped">
                {{scoped.row.action}}
            </template>
        </el-table-column>
        <el-table-column slot="operation" label="操作" width="130" fixed="right">
            <template slot-scope="scope">
                <el-button type="text" @click="handleEdit(scope.$index, scope.row)">交易记录</el-button>
            </template>
        </el-table-column>
    </search-table>
</div>
</template>

<script>
import searchTable from '../../page/searchTable';
export default {
    name: 'listTable',
    components: {
        searchTable
    },
    data() {
        return {
            searchListData: [{
                    label: '抵质押物编号',
                    type: 'input',
                    prop: '',
                    key: 'val',
                    placeholder: '请输入'
                },
                {
                    label: '权利人名称',
                    type: 'input',
                    prop: '',
                    key: 'val1',
                    placeholder: '请输入'
                },
                {
                    label: '申请机构',
                    type: 'input',
                    prop: '',
                    key: 'val1',
                    placeholder: '请输入'
                },
                {
                    label: '申请机构',
                    type: 'select',
                    prop: '',
                    key: 'sel',
                    placeholder: '请选择',
                    multiple:true,     //多选
                    optionArray: [{
                        value: '01',
                        label: '黄金糕'
                    }, {
                        value: '02',
                        label: '双皮奶'
                    }, ]
                },
                {
                    label: '入库日期',
                    type: 'date',
                    prop: '',
                    key: 'val1',
                    placeholder: '请选择'
                },
                {
                    label: '入库日期',
                    type: 'daterange',
                    prop: [],
                    key: 'val2',
                    placeholder: '请选择',
                    startPlaceholder: '开始日期'
                },
                {
                    label: '借款人名称',
                    type: 'input',
                    prop: '',
                    key: 'val1',
                    placeholder: '请输入'
                },
            ],
            dialogVisible: false,
            tableFormObj: {
                columnList: [{
                        slot: "selection"
                    },
                    {
                        slot: 'index'
                    },
                    {
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
                        label: "合同编号",
                        prop: "type",
                        width: 150,
                    },
                    {
                        label: "客户名称",
                        prop: "name",
                        width: 150,
                    },
                    {
                        label: "权利人名称",
                        prop: "name",
                        width: 250,
                    },
                    {
                        label: "入账机构",
                        prop: "ader",
                        width: 200,
                    },
                    {
                        label: "入库权证编号",
                        prop: "ader",
                        width: 200,
                    },
                    {
                        label: "抵押物债权价值(元)",
                        prop: "ader",
                        width: 200,
                    },
                    {
                        label: "经办人",
                        prop: "ader",
                        width: 200,
                    },
                    {
                        label: "保管人",
                        prop: "ader",
                        width: 200,
                    },
                    {
                        label: "实物保管机构",
                        prop: "ader",
                        width: 200,
                    },
                    {
                        label: "目前状态",
                        prop: "ader",
                        width: 200,
                    },
                    {
                        slot: 'operation'
                    },
                ],
                tableData: [{
                        number: '353466',
                        type: '房产',
                        name: "张三张三",
                        id: '435436457566867',
                        ader: '金融港A18号楼',
                        action: '插槽'
                    },
                    {
                        number: '657568568',
                        type: '房产',
                        name: "张三张三22",
                        id: '435436457566867',
                        ader: '金融港A18号楼',
                        action: '插槽'
                    },
                    {
                        number: '979696796',
                        type: '房产',
                        name: "张三张三",
                        id: '435436457566867',
                        ader: '金融港A18号楼',
                        action: '插槽'
                    },
                    {
                        number: '657568568',
                        type: '房产',
                        name: "张三张三22",
                        id: '435436457566867',
                        ader: '金融港A18号楼',
                        action: '插槽'
                    },
                    {
                        number: '979696796',
                        type: '房产',
                        name: "张三张三",
                        id: '435436457566867',
                        ader: '金融港A18号楼',
                        action: '插槽'
                    },
                ],
            },
        };
    },
    methods: {
        changeDisplaySlot(){
            console.log(this.searchListData);
        },
        handleSelectionChange(val) {
            console.log(val);
        },
        delForlist(_index) {
            this.formInline.formList.splice(_index, 1);
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

.container /deep/.el-breadcrumb {
    margin-bottom: 20px;
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

.box-card {
    margin-bottom: 15px;
}
</style>
