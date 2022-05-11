<template>
<div>

    <div class="container">
        <div class="handle-box">
            <el-form :inline="true" ref="ruleForm">
                <template v-for="item in searchList">
                    <el-form-item :label="item.label" v-if="item.type == 'input'">
                        <el-input v-model="item.prop" :placeholder="item.placeholder" class="handle-input mr10"></el-input>
                    </el-form-item>
                    <el-form-item :label="item.label" v-if="item.type == 'select'">
                        <el-select v-model="item.prop" :placeholder="item.placeholder" v-bind="{...item}"  class="handle-select mr10">
                            <template v-for="items in item.optionArray">
                                <el-option :label="items.label" :value="items.value"></el-option>
                            </template>
                        </el-select>
                    </el-form-item>
                    <el-form-item :label="item.label" v-if="item.type == 'date'">
                        <el-date-picker v-model="item.prop" type="date" :placeholder="item.placeholder">
                        </el-date-picker>
                    </el-form-item>
                    <el-form-item :label="item.label" v-if="item.type == 'daterange'">
                        <el-date-picker v-model="item.prop" range-separator="至" v-bind="{startPlaceholder:'开始日期', endPlaceholder:'结束日期',...item}" type="daterange">
                        </el-date-picker>
                    </el-form-item>
                </template>

                <el-button type="primary" icon="el-icon-search" @click="handleSearch">搜索</el-button>
                <el-button @click="resetForm()">重置</el-button>
                <slot name="button"></slot>
            </el-form>
        </div>

        <el-table ref="WsTable" border :data="tableForm.tableData" v-bind="$attrs" v-on="$listeners">
            <template v-for="(col, index) in tableForm.columnList" v-bind="col">
                <el-table-column v-if="!col.slot" 　:prop="col.prop" :label="col.label" v-bind="{...col}">
                </el-table-column>
                <slot v-else :name="col.slot"></slot>
            </template>

        </el-table>

      
        <div class="pagination">
            <el-pagination background layout="total, prev, pager, next" :current-page="query.pageIndex" :page-size="query.pageSize" :total="pageTotal" @current-change="handlePageChange"></el-pagination>
        </div>
    </div>

    <!-- 编辑弹出框 -->
    <el-dialog title="添加" :visible.sync="editVisible" width="30%" :append-to-body=true>
        <el-form ref="form" :model="form" label-width="70px">
            <el-form-item label="用户名">
                <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="地址">
                <el-input v-model="form.address"></el-input>
            </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
            <el-button @click="editVisible = false">取 消</el-button>
            <el-button type="primary" @click="saveEdit">确 定</el-button>
        </span>
    </el-dialog>
</div>
</template>

<script>
import {
    fetchData
} from '../../api/index';
export default {
    name: 'basetable',
    props: {
        searchList: {
            type: Array
        },
        tableForm: {
            type: Object
        }
    },
    data() {
        return {
            // searchListData: [{
            //         label: '名称',
            //         type: 'input',
            //         prop: '',
            //         key: 'val',
            //         placeholder: '请输入名称'
            //     },
            //     {
            //         label: '名称1',
            //         type: 'input',
            //         prop: '',
            //         key: 'val1',
            //         placeholder: '请输入名称1'
            //     },
            //     {
            //         label: '类型',
            //         type: 'select',
            //         prop: '',
            //         key: 'seletval',
            //         optionArray: [{
            //                 label: '广东省',
            //                 value: '1'
            //             },
            //             {
            //                 label: '海南',
            //                 value: '2'
            //             }
            //         ],
            //         placeholder: '请选择类型'
            //     },
            //     {
            //         label: '日期',
            //         type: 'date',
            //         prop: '',
            //         key: 'datatime',
            //         placeholder: '请选择日期'
            //     },
            //     {
            //         label: '起止日期',
            //         type: 'dates',
            //         prop: '',
            //         key: 'datatimes',
            //         placeholder: '请选择起止日期'
            //     },
            // ],
            query: {
                address: '',
                name: '',
                pageIndex: 1,
                pageSize: 10
            },
            // tableForm: {
            //     columnList: [{
            //             label: "抵押物编号",
            //             prop: "number",
            //             width: 150,
            //         },
            //         {
            //             label: "抵押物类型",
            //             prop: "type",
            //             width: 150,
            //         },
            //         {
            //             slot: 'action'
            //         },
            //         {
            //             label: "客户名称",
            //             prop: "name",
            //             width: 150,
            //         },
            //         {
            //             label: "客户身份证号/统一社会信用代码",
            //             prop: "id",
            //             width: 250,
            //         },
            //          {
            //             label: "具体位置",
            //             prop: "ader",
            //             width: 200,
            //         },
            //         {
            //             slot: 'operation'
            //         },
            //     ],
            //     tableData: [{
            //             number:'353466',
            //             type:'房产',
            //             name: "张三张三",
            //             id:'435436457566867',
            //             ader: '金融港A18号楼',
            //             action:'插槽'
            //         },
            //         {
            //             number:'657568568',
            //             type:'房产',
            //             name: "张三张三22",
            //             id:'435436457566867',
            //             ader: '金融港A18号楼',
            //             action:'插槽'
            //         },
            //         {
            //             number:'979696796',
            //             type:'房产',
            //             name: "张三张三",
            //             id:'435436457566867',
            //             ader: '金融港A18号楼',
            //             action:'插槽'
            //         },
            //         {
            //             number:'657568568',
            //             type:'房产',
            //             name: "张三张三22",
            //             id:'435436457566867',
            //             ader: '金融港A18号楼',
            //             action:'插槽'
            //         },
            //         {
            //             number:'979696796',
            //             type:'房产',
            //             name: "张三张三",
            //             id:'435436457566867',
            //             ader: '金融港A18号楼',
            //             action:'插槽'
            //         },
            //     ],
            // },
            tableData: [],
            multipleSelection: [],
            delList: [],
            editVisible: false,
            pageTotal: 0,
            form: {},
            idx: -1,
            id: -1
        };
    },
    created() {

        //  this.getData();
    },
    mounted() {
        console.log(this.ruleForms)
    },
    methods: {
        resetForm() {
            this.searchList.forEach(element => {
                if(element.type == 'input' || element.type == 'select' || element.type == 'date'){
                    element.prop = '';
                }
                if(element.type == 'daterange'){
                    element.prop = [];
                }
            });
        },
        // 获取 easy-mock 的模拟数据
        getData() {
            fetchData(this.query).then(res => {
                console.log(res);
                this.tableData = res.list;
                this.pageTotal = res.pageTotal || 50;
            });
        },
        changeDisplay(){
            alert('998')
            this.$emit('changeDisplay', arryList);
        },
        // 触发搜索按钮
        handleSearch() {
            let arryList = this.searchList.map((item, index, arr) => {
                return {
                    [item.key]: item.prop
                }
            });
            this.$emit('queryList', arryList);
            console.log(arryList)
            // this.$set(this.query, 'pageIndex', 1);
            // this.getData();
        },
        // 删除操作
        handleDelete(index, row) {
            // 二次确认删除
            this.$confirm('确定要删除吗？', '提示', {
                    type: 'warning'
                })
                .then(() => {
                    this.$message.success('删除成功');
                    this.tableData.splice(index, 1);
                })
                .catch(() => {});
        },
        // 多选操作
        handleSelectionChange(val) {
            this.multipleSelection = val;
        },

        // 编辑操作
        handleEdit(index, row) {
            // this.idx = index;
            // this.form = row;
            this.editVisible = true;
        },
        // 保存编辑
        saveEdit() {
            this.editVisible = false;
            this.$message.success(`修改第 ${this.idx + 1} 行成功`);
            this.$set(this.tableData, this.idx, this.form);
        },
        // 分页导航
        handlePageChange(val) {
            this.$set(this.query, 'pageIndex', val);
            this.getData();
        }
    }
};
</script>

<style scoped>
.handle-box {
    margin-bottom: 20px;
}

.handle-select {
    width: 100%;
}

.handle-input {
    width: 100%;
    display: inline-block;
}

/deep/.el-range-editor--small.el-input__inner {
    width: 230px;
}

.table {
    width: 100%;
    font-size: 14px;
}

.red {
    color: #ff0000;
}

.mr10 {
    margin-right: 10px;
}

.table-td-thumb {
    display: block;
    margin: auto;
    width: 40px;
    height: 40px;
}

.pagination {
    text-align: center;
}

/deep/.el-form--inline .el-form-item__label {
    width: 100px;
    text-align: left;
}

.handle-box /deep/.el-form-item__content {
    width: 230px;
}

.handle-box /deep/.el-date-editor.el-input {
    width: 100%;
}
</style>
