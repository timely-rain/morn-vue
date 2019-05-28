/**
 * 视图分组名称
 */
export type ViewGroupNames = ViewStateNames | 'edit' | string

/**
 * 视图状态名称
 */
export type ViewStateNames = 'add' | 'default' | 'loading' | 'read' | 'update' | string

/**
 * 视图分组
 */
export interface ViewGroup {

  /**
   * 分组名称
   */
  name: ViewGroupNames;

  /**
   * 状态名称
   */
  states: ViewStateNames[];
}

/**
 * Morn视图声明
 */
export interface MoView {

  /**
   * 视图分组
   */
  groups: ViewGroup[];

  /**
   * 当前视图状态
   */
  states: ViewStateNames[];

  /**
   * 添加分组
   * @param name 分组名称
   * @param states 状态组
   */
  addGroup(name: ViewGroupNames, ...states: ViewStateNames[]): ViewGroup;

  /**
   * 添加当前状态
   * @param states 状态组
   */
  addStates(...states: ViewStateNames[]): ViewStateNames[];

  /**
   * 判断是否处于某状态
   * @param states 状态组
   */
  hasStates(...states: ViewStateNames[]): boolean;

  /**
   * 判断是否处于某分组
   * @param name 分组名称
   */
  isGroup(name: ViewGroupNames): boolean;

  /**
   * 移除当前状态
   * @param states 状态组
   */
  removeStates(...states: ViewStateNames[]): ViewStateNames[];

  /**
   * 设置当前状态
   * @param states 状态组
   */
  setStates(...states: ViewStateNames[]): ViewStateNames[];

  /**
   * 判断是否处于新增
   */
  isAdd(): boolean;

  /**
   * 判断是否处于默认
   */
  isDefault(): boolean;

  /**
   * 判断是否处于编辑
   */
  isEdit(): boolean;

  /**
   * 判断是否处于加载
   */
  isLoading(): boolean;

  /**
   * 判断是否处于阅读
   */
  isRead(): boolean;

  /**
   * 判断是否处于更新
   */
  isUpdate(): boolean;
}

/**
 * 视图
 */
export class View implements MoView {
  groups: ViewGroup[];

  states: ViewStateNames[];

  constructor(...groups: ViewGroup[]) {
    const addGroup: ViewGroup = {name: 'add', states: ['add']}
    const defaultGroup: ViewGroup = {name: 'default', states: ['default']}
    const editGroup: ViewGroup = {name: 'edit', states: ['add', 'update']}
    const readGroup: ViewGroup = {name: 'read', states: ['read']}
    const updateGroup: ViewGroup = {name: 'update', states: ['update']}
    this.groups = [addGroup, defaultGroup, editGroup, readGroup, updateGroup]
    this.groups.push(...groups)
    this.states = ['default']
  }

  addGroup(name: ViewGroupNames, ...states: ViewStateNames[]): ViewGroup {
    const group = {name, states}
    this.groups.push(group)
    return group
  }

  addStates(...states: ViewStateNames[]): ViewStateNames[] {
    this.states = this.states.concat(states).sort()
    return this.states
  }

  hasStates(...states: ViewStateNames[]): boolean {
    return states.every((v) => this.states.includes(v))
  }

  isAdd(): boolean {
    return this.hasStates('add')
  }

  isDefault(): boolean {
    return this.hasStates('default')
  }

  isEdit(): boolean {
    return this.hasStates('add', 'update')
  }

  isGroup(name: ViewGroupNames): boolean {
    return false
  }

  isLoading(): boolean {
    return this.hasStates('loading')
  }

  isRead(): boolean {
    return this.hasStates('read')
  }

  isUpdate(): boolean {
    return this.hasStates('update')
  }

  removeStates(...states: ViewStateNames[]): ViewStateNames[] {
    return ['']
  }

  setStates(...states: ViewStateNames[]): ViewStateNames[] {
    return ['']
  }
}
